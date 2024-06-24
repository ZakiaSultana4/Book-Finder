import { useState } from "react";
import jsonData from "./data.json";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Card from "./components/Card";

export default function MainView() {
  const [books, setBooks] = useState(jsonData);

  /* Search Handler Start*/
  function handleSearch(searchWord) {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchWord.toLowerCase())
    );
    setBooks([...filtered]);
  }
  /* Search Handler Ends*/

  /* Sort Handler Start*/
  function handleSortAZ() {
    const sortedData = [...books].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setBooks(sortedData);
  }
  function handleSortZA() {
    const sortedData = [...books].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setBooks(sortedData);
  }
  function handleSortYearOldest() {
    const sortedData = [...books].sort((a, b) =>
      a.publication.localeCompare(b.publication)
    );
    setBooks(sortedData);
  }
  function handleSortYearNewest() {
    const sortedData = [...books].sort((a, b) =>
      b.publication.localeCompare(a.publication)
    );
    setBooks(sortedData);
  }
  /* Sort Handler Ends*/

  /* Favorite Handler Start*/
  function handleFavorite(bookId) {
    const bookIndex = books.findIndex((task) => task.id === bookId);
    const newBooks = [...books];
    newBooks[bookIndex].isFavorite = !newBooks[bookIndex].isFavorite;

    setBooks(newBooks);
  }
  /* Favorite Handler Ends*/

  return (
    <div>

      <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <div>
          <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
          <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
            Trending Books of the Year
          </h2>
          <Search onSearch={handleSearch} />
        </div>
        <Sort
          handleSortAZ={handleSortAZ}
          handleSortZA={handleSortZA}
          handleSortYearOldest={handleSortYearOldest}
          handleSortYearNewest={handleSortYearNewest}
        />
      </div>
    </header>
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <Card book={book} key={book.id} onFav={handleFavorite} />
      ))}
    </div>
      </main>
    </div>
  );
}
