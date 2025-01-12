import coverImg from "../Images/download.png";
export default function BookItem({ book, bookId, setBookId }) {
  return (
    <div key={book.key}>
      <div
        className="shadow-sm rounded-lg bg-gray-200 m-1 h-96 hover:border-2 hover:border-orange-500"
        onClick={() => setBookId(book.key)}
      >
        {" "}
        <img
          className="w-full p-4 sm:px-24 md:p-2 h-64 "
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : coverImg
          }
          alt="Book cover"
        />
        <div className="px-2">
          <h2 className="font-bold text-lg">
            {book.title
              ? book.title.length > 25
                ? `${book.title.slice(0, 30)}...`
                : book.title
              : "Not Available"}
          </h2>
          <p>
            <span className="font-semibold text-md"> Author(s): </span>{" "}
            <span className="font-light text-sm">
              {book.author_name
                ? book.author_name.length > 2
                  ? book.author_name.slice(0, 3).join(", ") +
                    (book.author_name.length > 3 ? "..." : "")
                  : book.author_name.join(", ")
                : "Not Available"}{" "}
            </span>
          </p>
          <p className="">
            <span className="font-semibold text-md"> Publisher: </span>

            <span className="font-light text-sm">
              {book.publisher && book.publisher.length > 0
                ? book.publisher.slice(0, 2).join(", ") +
                  (book.publisher.length >= 3 ? "..." : "")
                : "Not Available"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
