import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import coverImg from "../Images/download.png";
import { useNavigate } from "react-router-dom";
export default function BookDetails({
  books,
  bookId,
  readingList,
  setReadingList,
}) {
  const [bookItem, setBookItem] = useState("");
  const [bookAddedMessage, setBookAddedMessage] = useState("");

  // useEffect to set the bookItem state based on the bookId
  useEffect(() => {
    const pickedBook = books.find((book) => book.key === bookId);
    setBookItem(pickedBook);
  }, [books, bookId]);

  const navigate = useNavigate();
  const bookAdded = readingList.some((book) => book.key === bookItem.key);

  const addToReadingList = () => {
    if (!bookItem) return;

    if (bookAdded) {
      alert("Book already added to Reading List");
      return;
    } else {
      setReadingList([...readingList, bookItem]);

      setBookAddedMessage("Book Added!");

      setTimeout(() => {
        setBookAddedMessage("");
      }, 1000);
    }
  };

  return (
    <div>
      <Nav />
      <div className="mt-20">
        {!bookItem && (
          <h1 className="font-bold text-center text-red-500">
            Book not Found!
          </h1>
        )}
        <p className="text-black mx-10 my-1">
          <span
            className="underline hover:cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Back
          </span>
          <span className="italic font-light ml-2 ">{bookItem.title}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 shadow-lg mx-10 bg-gray-200 rounded-xl p-4">
          <img
            className="p-2 w-52 h-64 md:w-64 md:h-72 lg:w-72 lg:h-96 m-auto"
            src={
              bookItem.cover_i
                ? `https://covers.openlibrary.org/b/id/${bookItem.cover_i}-M.jpg`
                : coverImg
            }
            alt="Book Cover"
          />
          <div className="flex-1 grid gap-1">
            <h2 className="text-md md:text-lg lg:text-xl font-medium">
              {bookItem.title ? bookItem.title : "Not Available"}
            </h2>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Author(s):
              </span>
              <span className="text-sm lg:text-md ">
                {bookItem.author_name
                  ? bookItem.author_name.join(", ")
                  : "Not Available"}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Publisher(s):{" "}
              </span>
              <span className="text-sm lg:text-md">
                {bookItem.publisher
                  ? bookItem.publisher.join(", ")
                  : "Not Available"}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Publication Date:{" "}
              </span>
              <span className="text-sm lg:text-md">
                {bookItem.publish_date
                  ? bookItem.publish_date.join(", ")
                  : "Not Available"}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                ISBN:
              </span>
              <span className="text-sm lg:text-md">
                {bookItem.isbn ? bookItem.isbn.join(", ") : "Not Available"}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Number of Pages:
              </span>
              <span className="text-sm lg:text-md">
                {bookItem.number_of_pages_median
                  ? bookItem.number_of_pages_median
                  : "Not Available"}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Subject:
              </span>
              <span className="text-sm lg:text-md">
                {bookItem.subject
                  ? bookItem.subject.join(", ")
                  : "Not Available"}
              </span>
            </p>
            <div className="text-center">
              <p className="text-green-500 italic mb-4">{bookAddedMessage}</p>
              <button
                className={`w-44 items-center text-white rounded-lg p-2 mt-1 drop-shadow ${
                  bookAdded
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-400 animate-bounce"
                }`}
                onClick={addToReadingList}
              >
                {bookAdded ? "Added to Reading List" : "Add to Reading List"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
