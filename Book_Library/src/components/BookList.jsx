import coverImg from "../Images/download.png";
export default function BookList({ books, loading }) {
  return (
    <div className=" flex flex-col gap-4 px-10 pt-2 bg-gray-100 ">
      <div className="text-center text-xl font-bold">
        {/*Customized heading based on loading status and obtained results*/}
        {loading && <h1>Loading your search results...</h1>}
        {!loading && books.length === 0 && (
          <h1 className="text-red">No results found!</h1>
        )}
        {!loading && books.length > 0 && (
          <h1 className="text-orange-500">Here are your search results</h1>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {books.slice(0, 50).map((book) => (
          <div key={book.key}>
            <div className="shadow-xl rounded-lg bg-white m-1 h-96">
              <img
                className="w-full p-2 h-64"
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : coverImg
                }
                alt={book.title || "Book cover"}
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
                        (book.author_name.length >= 3 ? "..." : "")
                      : "Not Available"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
