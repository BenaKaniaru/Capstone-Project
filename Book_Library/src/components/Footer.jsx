export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-gray-500 text-white mt-20 w-full m-0">
      <div className="w-72 py-4 ml-4 md:ml-10">
        <span className="text-orange-500 font-black text-2xl">NerdHub</span>
      </div>

      <div>
        <ul className="flex gap-4 mr-4 md:mr-10 py-4">
          <li className="w-6 hover:cursor-pointer">
            <img src="/Icons/github.png" alt="github Icon" />
          </li>
          <li className="w-6 hover:cursor-pointer">
            <img src="/Icons/linkedin.png" alt="linked in logo" />
          </li>
          <li className="w-6 hover:cursor-pointer">
            <img src="/Icons/twitter.png" alt="X logo" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
