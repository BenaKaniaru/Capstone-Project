import React, { useState } from "react";
export default function Search({ setBooks, books, setLoading }) {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");
  const baseUrl = "https://www.googleapis.com/books/v1/volumes?q"; //base url for the API
  const apiKey = "AIzaSyDRppaMO63Az_zhhND7zglCho42UcLyZgI";

  //function for determining the search input
  /*const getSearchType = (input) => {
    const isbnRegex = /^\d{10}(\d{3})?$/; // Matches 10 or 13 digit ISBN
    if (isbnRegex.test(input)) return "isbn";
    if (input.split(" ").length > 1) return "title";

    {
      /*if (input.split(" ").length > 1) return "title";
    } //haven't figured out how to differentiate between title and author search but I am working on it
  };*/

  //function for handling form submission
  //function ensures controlled API calls
  async function handleSearch(e) {
    e.preventDefault();
    if (!searchInput.trim()) {
      setError("Your search input is empty!");
      return;
    }

    setError(null);
    setLoading(true);
    setBooks([]); //clear previous search results

    //const searchType = getSearchType(searchInput);
    //const url = `${baseUrl[searchType]}=${searchInput}`;

    try {
      const response = await fetch(
        `${baseUrl}=${searchInput}&API_KEY=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data. Please try again!");
      }
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      setError(error.message);
    }
    console.log(books);
    setLoading(false);
  }
  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-row items-center">
        {/*Search Input field */}
        <input
          name="searchInput"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="search for books by author,title, or keywords"
          type="text"
          className="border px-3 py-1 text-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {/*form submission button */}
        <button
          type="submit"
          className="border p-1 rounded-r-lg text-white w-20 bg-orange-500 hover:bg-orange-200"
        >
          Search
        </button>
      </form>

      {/*Display error message, if any */}
      {error && (
        <div className="border w-64 bg-white text-red-500 rounded-md mt-8 px-4 text-center">
          {error}
        </div>
      )}
    </div>
  );
}
