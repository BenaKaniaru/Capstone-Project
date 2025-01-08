import Nav from "../components/Nav";
import Main from "../components/Main";

export default function Homepage({ books, setBooks, bookId, setBookId }) {
  return (
    <div className="flex">
      <Nav />
      <Main
        books={books}
        setBooks={setBooks}
        bookId={bookId}
        setBookId={setBookId}
      />
    </div>
  );
}
