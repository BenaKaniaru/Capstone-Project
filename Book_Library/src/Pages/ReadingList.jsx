import { useNavigate } from "react-router-dom";
import ReadingItem from "../components/ReadingItem";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function ReadingList({ readingList, setReadingList }) {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <div className="mt-20">
        <span
          className="ml-2 md:ml-10 italic underline text-md hover:cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Back
        </span>
        {readingList.length === 0 && (
          <h1 className="font-bold text-center text-xl text-orange-500 mb-2">
            No Books in Reading List
          </h1>
        )}
        {readingList.length > 0 && (
          <h1 className="font-bold text-center text-xl text-orange-500 mb-2">
            Reading List
          </h1>
        )}
        <ul className="flex flex-col gap-4 box-shadow-lg bg-gray-300 mx-2 md:mx-28 lg:mx-36 p-4 rounded-xl">
          <ReadingItem
            readingList={readingList}
            setReadingList={setReadingList}
          />
        </ul>
      </div>
      <Footer />
    </div>
  );
}
