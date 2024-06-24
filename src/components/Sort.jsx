/* eslint-disable react/prop-types */
export default function Sort({
  handleSortAZ,
  handleSortZA,
  handleSortYearOldest,
  handleSortYearNewest,
}) {
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "name_asc") {
      handleSortAZ();
    } else if (selectedValue === "name_desc") {
      handleSortZA();
    } else if (selectedValue === "year_asc") {
      handleSortYearOldest();
    } else if (selectedValue === "year_desc") {
      handleSortYearNewest();
    } else {
      ("not selected");
    }
  };

  return (
    <div className="flex items-stretch space-x-3">
      <select
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        id="sortBy"
        onChange={handleSortChange}
      >
        <option value="">Sort</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
}
