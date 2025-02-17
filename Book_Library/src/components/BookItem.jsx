import coverImg from "../Images/download.png";
export default function BookItem({ book, bookId, setBookId }) {
  return (
    <div key={book.id}>
      <div
        className="shadow-sm rounded-lg bg-gray-200 m-1 h-96 hover:border-2 hover:border-orange-500"
        onClick={() => setBookId(book.id)}
      >
        {" "}
        <img
          className="w-full p-4 sm:px-24 md:p-2 h-64 "
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : coverImg
          }
          alt="Book cover"
        />
        <div className="px-2">
          <h2 className="font-bold text-lg">
            {book.volumeInfo.title
              ? book.volumeInfo.title.length > 25
                ? `${book.volumeInfo.title.slice(0, 30)}...`
                : book.volumeInfo.title
              : "Not Available"}
          </h2>
          <p>
            <span className="font-semibold text-md"> Author(s): </span>{" "}
            <span className="font-light text-sm">
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.length > 2
                  ? book.volumeInfo.authors.slice(0, 3).join(", ") +
                    (book.volumeInfo.authors.length > 3 ? "..." : "")
                  : book.volumeInfo.authors.join(", ")
                : "Not Available"}{" "}
            </span>
          </p>
          <p className="">
            <span className="font-semibold text-md"> Publisher: </span>

            <span className="font-light text-sm">
              {book.volumeInfo.publisher ? Array.isArray(book.volumeInfo.publisher) //checks if the publishers element is an array
                ? book.volumeInfo.publisher.slice(0, 2).join(", ") +
                  (book.volumeInfo.publisher.length >= 3 ? "..." : "") : book.volumeInfo.publisher
                : "Not Available"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
