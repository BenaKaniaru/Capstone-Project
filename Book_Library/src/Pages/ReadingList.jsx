import ReadingItem from "../components/ReadingItem";
import Nav from "../components/Nav";
export default function ReadingList({ readingList, setReadingList }) {
  return (
    <div>
      <Nav />
      <div className="mt-20">
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
        <ul className="flex flex-col gap-4 box-shadow-lg bg-gray-300 mx-11 md:mx-28 lg:mx-36 p-4 rounded-xl">
          <ReadingItem
            readingList={readingList}
            setReadingList={setReadingList}
          />
        </ul>
      </div>
    </div>
  );
}
