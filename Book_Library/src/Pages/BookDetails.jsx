import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import coverImg from "../Images/download.png";
import { useNavigate } from "react-router-dom";
export default function BookDetails({
  books,
  bookId,
  readingList,
  setReadingList,
}) {
  //const {bookId} = useParams();
  const [bookItem, setBookItem] = useState();
  const [bookAddedMessage, setBookAddedMessage] = useState("");
  const [loadingError, setLoadingError] = useState(false);
  console.log("bookId:", bookId);
  console.log("books:", books);

  // useEffect to set the bookItem state based on the bookId
  useEffect(() => {
    setBookItem(books.find((book) => book.id === bookId));

    const timer = setTimeout(() => {
      if (!bookItem) {
        setLoadingError(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [books, bookId, bookItem]);
  console.log("bookItem:", bookItem);

  const navigate = useNavigate();

  const bookAdded = bookItem
    ? readingList.some((book) => book.id === bookItem.id)
    : false;

  const addToReadingList = () => {
    if (!bookItem) return;

    if (bookAdded) {
      alert("Book already added to Reading List");
      return;
    } else {
      setReadingList([...readingList, bookItem]);

      //localStorage.setItem("readingList", JSON.stringify(updatedList));

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
        {!bookItem ? (
          loadingError ? (
            <h1 className="font-bold text-center text-red-500">
              Error loading book details
            </h1>
          ) : (
            <h1 className="font-bold text-center text-red-500">Loading...</h1>
          )
        ) : (
          <>
            <p className="text-black mx-10 my-1">
              <span
                className="underline hover:cursor-pointer"
                onClick={() => navigate(-1)}
              >
                Back
              </span>
              <span className="italic font-light ml-2 ">
                {bookItem.volumeInfo.title || "Not Available"}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 shadow-lg mx-10 bg-gray-200 rounded-xl p-4">
              <img
                className="p-2 w-52 h-64 md:w-64 md:h-72 lg:w-72 lg:h-96 m-auto"
                src={
                  bookItem.volumeInfo.imageLinks
                    ? bookItem.volumeInfo.imageLinks.thumbnail
                    : coverImg
                }
                alt="Book Cover"
              />

              <div className="flex-1 grid gap-1">
                <h2 className="text-md md:text-lg lg:text-xl font-medium">
                  {bookItem.volumeInfo.title
                    ? bookItem.volumeInfo.title
                    : "Not Available"}
                </h2>
                <p>
                  <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                    Author(s):
                  </span>
                  <span className="text-sm lg:text-md ">
                    {bookItem.volumeInfo.authors
                      ? bookItem.volumeInfo.authors.join(", ")
                      : "Not Available"}
                  </span>
                </p>
                <p>
                  <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                    Description:
                  </span>
                  <span className="text-sm lg:text-md ">
                    {bookItem.volumeInfo.description
                      ? bookItem.volumeInfo.description
                      : "Not Available"}
                  </span>
                </p>
                <p>
                  <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                    Publisher(s):{" "}
                  </span>
                  <span className="text-sm lg:text-md">
                    {bookItem.volumeInfo.publisher
                      ? bookItem.volumeInfo.publisher
                      : "Not Available"}
                  </span>
                </p>
                <p>
                  <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                    Publication Date:{" "}
                  </span>
                  <span className="text-sm lg:text-md">
                    {bookItem.volumeInfo.publishedDate
                      ? bookItem.volumeInfo.publishedDate
                      : "Not Available"}
                  </span>
                </p>
                <p>
                  <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                    ISBN:
                  </span>
                  <span className="text-sm lg:text-md">
                    {bookItem.volumeInfo.industryIdentifiers
                      ? bookItem?.volumeInfo?.industryIdentifiers?.find(
                          (id) => id.type === "ISBN_13"
                        )?.identifier
                      : "Not Available"}
                  </span>
                </p>
                <p>
                  <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                    Number of Pages:
                  </span>
                  <span className="text-sm lg:text-md">
                    {bookItem.volumeInfo.pageCount
                      ? bookItem.volumeInfo.pageCount
                      : "Not Available"}
                  </span>
                </p>
                <p>
                  <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                    Subject:
                  </span>
                  <span className="text-sm lg:text-md">
                    {bookItem.volumeInfo.categories
                      ? bookItem.volumeInfo.categories.join(", ")
                      : "Not Available"}
                  </span>
                </p>
                <div className="text-center">
                  <p className="text-green-500 italic mb-4">
                    {bookAddedMessage}
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <button
                      className={`w-44 items-center text-white rounded-lg p-2 mt-1 drop-shadow ${
                        bookAdded
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-orange-500 hover:bg-orange-400 animate-bounce"
                      }`}
                      onClick={addToReadingList}
                      disabled={!bookItem}
                    >
                      {bookAdded
                        ? "Added to Reading List"
                        : "Add to Reading List"}
                    </button>

                    {bookAdded && (
                      <Link
                        to="/ReadingList"
                        className="text-orange-500 font-medium italic underline hover:cursor-pointer"
                      >
                        Open Reading List
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
