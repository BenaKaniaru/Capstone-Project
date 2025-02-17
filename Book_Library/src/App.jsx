import React, { useState, useEffect } from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "./Pages/BookDetails";
import ReadingList from "./Pages/ReadingList";
import UserAuth from "./Pages/UserAuth";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
export default function App() {
  const [bookId, setBookId] = useState("");
  const [books, setBooks] = useState([]);
  const initialValues = { username: "", email: "", password: "", confirm: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [readingList, setReadingList] = useState(() => {
    const savedList = localStorage.getItem("readings");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("readings", JSON.stringify(readingList));
  }, [readingList]);

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
          path={"/BookDetails/:bookId"}
          element={
            <BookDetails
              books={books}
              bookId ={bookId}
              setBooks={setBooks}
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
        <Route
          path="/UserAuth"
          element={
            <UserAuth formValues={formValues} setFormValues={setFormValues} />
          }
        />
        <Route
          path="/LogIn"
          element={
            <LogIn formValues={formValues} setFormValues={setFormValues} />
          }
        />
        <Route
          path="/SignIn"
          element={
            <SignIn formValues={formValues} setFormValues={setFormValues} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
