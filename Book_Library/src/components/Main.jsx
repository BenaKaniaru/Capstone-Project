import bgImage from "../Images/imagess.jpeg";
import BookList from "./BookList";
import Search from "./Search";
import React, { useState } from "react";
export default function Main({ books, setBooks, bookId, setBookId }) {
  const [loading, setLoading] = useState(false);
  return (
    <main className="w-screen">
      <div
        className="bg-cover bg-center py-20 px-14 mt-16 flex flex-col items-center gap-3 w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "black", //fallback color incase bg-image fails to load
        }}
      >
        <h1 className="text-white text-2xl md:text-3xl text-center lg:text-4xl mt-8">
          Your <span className="font-bold text-orange-500">Gateway </span> to
          Endless <span className="font-bold text-orange-500">Knowledge </span>.
        </h1>
        <p className="text-white italic font-light mb-8">
          Knowledge is the key that unlocks the doors to endless
          possibilities—every day is a chance to learn and grow.
        </p>
        <Search setBooks={setBooks} setLoading={setLoading} />
      </div>
      <BookList
        books={books}
        loading={loading}
        bookId={bookId}
        setBookId={setBookId}
      />
    </main>
  );
}
