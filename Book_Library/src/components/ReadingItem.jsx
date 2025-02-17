import { useState } from "react";
import coverImg from "../Images/download.png";

export default function ReadingItem({ readingList, setReadingList }) {
  //function to delete a book from the reading list
  function deleteReadingItem(book) {
    setReadingList(readingList.filter((bookItem) => bookItem.id !== book.id));
  }

  return (
    <ul>
      {readingList.length > 0 ? (
        readingList.map((book) => (
          <li
            key={book.id}
            className="flex flex-row gap-2 md:gap-14 lg:gap-20 items-center hover:border-l-4 pl-2 justify-center hover:border-orange-500 mx-1 md:mx-4 mb-6"
          >
            <img
              className=" w-16 md:w-20 h-30 m-1 md:m-2"
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : coverImg
              }
              alt="Book cover"
            />
            <div className="flex-1">
              <p>
                <span className="font-bold text-lg mb-2">
                  {book.volumeInfo.title
                    ? book.volumeInfo.title
                    : "Book Title Not Available"}
                </span>
                (
                {book.volumeInfo.publishedDate
                  ? book.volumeInfo.publishedDate
                  : "No publish date"}
                )
              </p>
              <p>
                by{" "}
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Book Author Not Available"}
              </p>
            </div>

            <button
              className="bg-orange-500 p-1 text-white hover:p-2 transition-all duration-300 ease-in-out px-2"
              onClick={() => deleteReadingItem(book)}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>Add a book to your reading list</p>
      )}
    </ul>
  );
}
