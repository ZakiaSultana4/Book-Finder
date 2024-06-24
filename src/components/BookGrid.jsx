/* eslint-disable react/prop-types */

import Card from "./Card"; 

export default function BookGrid({ books, handleFavorite }) {

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <Card book={book} key={book.id} onFav={handleFavorite} />
      ))}
    </div>
  );
}
