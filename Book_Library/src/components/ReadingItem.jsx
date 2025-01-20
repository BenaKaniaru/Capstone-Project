import coverImg from "../Images/download.png";
export default function ({ readingList, setReadingList }) {
  //function to delete a book from the reading list
  function deleteReadingItem(book) {
    setReadingList(
      readingList.filter((readingItem) => {
        book.id !== readingItem.id;
      })
    );
  }
  return (
    <ul>
      {readingList.length > 0 ? (
        readingList.map((book) => (
          <li
            key={book.key}
            className="flex flex-row gap-2 md:gap-14 lg:gap-20 items-center hover:border-l-4 pl-2 justify-center hover:border-orange-500 mx-1 md:mx-2 mb-6"
          >
            <img
              className=" w-16 md:w-20 h-30 m-1 md:m-2"
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : coverImg
              }
              alt="Book cover"
            />
            <div className="flex-1">
              <p>
                <span className="font-bold text-lg mb-2">
                  {book.title ? book.title : "Book Title Not Available"}
                </span>
                ({book.publish_date ? book.publish_date[0] : "No publish date"})
              </p>
              <p>
                by{" "}
                {book.author_name
                  ? book.author_name.join(", ")
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
