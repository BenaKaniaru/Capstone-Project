import React, { useState } from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "./Pages/BookDetails";
import ReadingList from "./Pages/ReadingList";
export default function App() {
  const [bookId, setBookId] = useState("");
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

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
              readingList={readingList}
              setReadingList={setReadingList}
            />
          }
        />

        <Route
          path="/ReadingList/"
          element={
            <ReadingList
              readingList={readingList}
              setReadingList={setReadingList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
