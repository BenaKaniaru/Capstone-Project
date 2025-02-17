import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Homepage({ books, setBooks, bookId, setBookId }) {
  return (
    <div className="">
      <Nav />
      <Main
        books={books}
        setBooks={setBooks}
        bookId={bookId}
        setBookId={setBookId}
      />
      <Footer />
    </div>
  );
}
