import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
export default function BookDetails({ books, bookId }) {
  const bookItem = books.find((book) => book.key === bookId);
  const navigate = useNavigate();

  return (
    <div>
      <Nav />
      <div className="mt-20">
        {!bookItem && (
          <h1 className="font-bold text-center text-red-500">Book no Found!</h1>
        )}
        <p className="text-black mx-10 my-1">
          <span
            className="underline hover:cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Back
          </span>
          <span className="italic font-light ml-2 ">{bookItem.title}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 shadow-lg mx-10 bg-gray-200 rounded-xl p-4">
          <img
            className="p-2 w-52 h-64 md:w-64 md:h-72 lg:w-72 lg:h-96 m-auto"
            src={
              bookItem.cover_i
                ? `https://covers.openlibrary.org/b/id/${bookItem.cover_i}-M.jpg`
                : coverImg
            }
            alt="Book Cover"
          />
          <div className="flex-1 grid gap-1">
            <h2 className="text-md md:text-lg lg:text-xl font-medium">
              {bookItem.title}
            </h2>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Author(s):
              </span>
              <span className="text-sm lg:text-md ">
                {bookItem.author_name.join(", ")}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Publisher(s):{" "}
              </span>
              <span className="text-sm lg:text-md">
                {bookItem.publisher.join(", ")}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Publication Date:{" "}
              </span>
              <span className="text-sm lg:text-md">
                {bookItem.publish_date.join(", ")}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                ISBN:
              </span>

              <span className="text-sm lg:text-md">
                {bookItem.isbn.join(", ")}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Number of Pages:
              </span>
              <span className="text-sm lg:text-md">
                {bookItem.number_of_pages_median}
              </span>
            </p>
            <p>
              <span className="text-sm md:text-md lg:text-lg font-semibold mr-2">
                Subject:
              </span>

              <span className="text-sm lg:text-md">
                {bookItem.subject.join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
