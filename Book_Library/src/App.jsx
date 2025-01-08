import React, { useState } from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "./Pages/BookDetails";
export default function App() {
  const [bookId, setBookId] = useState("");
  const [books, setBooks] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              books={books}
              setBooks={setBooks}
              bookId={bookId}
              setBookId={setBookId}
            />
          }
        />
        <Route
          path={`/BookDetails${bookId}`}
          element={
            <BookDetails
              books={books}
              setBooks={setBooks}
              bookId={bookId}
              setBookId={setBookId}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
