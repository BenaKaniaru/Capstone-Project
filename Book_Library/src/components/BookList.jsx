import { Link } from "react-router-dom";
import BookItem from "./BookItem";
export default function BookList({ books, loading, bookId, setBookId }) {
  return (
    <div className=" flex flex-col gap-4 px-10 pt-2 bg-gray-100 ">
      <div className="text-center text-xl font-bold">
        {/*Customized heading based on loading status and obtained results*/}
        {loading && <h1>Loading your search results...</h1>}
        {!loading && books.length === 0 && (
          <h1 className="text-red-500">No results found!</h1>
        )}
        {!loading && books.length > 0 && (
          <h1 className="text-orange-500">Here are your search results</h1>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {books.slice(0, 50).map((book) => (
          <Link key={book.key} to={`/BookDetails${book.key}`}>
            <BookItem key={book.key} book={book} setBookId={setBookId} />
          </Link>
        ))}
      </div>
    </div>
  );
}
