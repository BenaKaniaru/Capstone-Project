import coverImg from "../Images/download.png";
export default function BookList({ books, loading }) {
  return (
    <div>
      {/*Customized heading based on loading status and obtained results*/}
      {loading && <h1>Loading your search results...</h1>}
      {!loading && books.length === 0 && <h1>No results found!</h1>}
      {!loading && books.length > 0 && <h1>Here are your search results</h1>}

      <div>
        {books.slice(0, 50).map((book) => (
          <div key={book.key}>
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : coverImg
              }
              alt={book.title || "Book cover"}
            />

            <div>
              <h2>
                {book.title
                  ? book.title.length > 25
                    ? `${book.title.slice(0, 30)}...`
                    : book.title
                  : "Not Available"}
              </h2>
              <p>
                Author(s):{" "}
                {book.author_name
                  ? book.author_name.length > 2
                    ? book.author_name.slice(0, 3).join(", ") +
                      (book.author_name.length > 3 ? "..." : "")
                    : book.author_name.join(", ")
                  : "Not Available"}
              </p>
              <p>
                Publisher(s):
                {book.publisher && book.publisher.length > 0
                  ? book.publisher.slice(0, 2).join(", ") +
                    (book.author_name.length >= 3 ? "..." : "")
                  : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
