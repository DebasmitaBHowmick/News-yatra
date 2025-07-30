
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      

<footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-3 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2028 <Link to="/" className="hover:underline">NewsYatra™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.instagram.com/" rel="noreferrer" target= "_blank" className="hover:underline me-4 md:me-6">Instagram</a>
        </li>
        <li>
            <a href="https://www.ndtv.com/" rel="noreferrer" target= "_blank" className="hover:underline me-4 md:me-6">NDTV</a>
        </li>
        <li>
            <a href="https://www.youtube.com/" target= "_blank" rel="noreferrer"className="hover:underline me-4 md:me-6">Youtube</a>
        </li>
        <li>
            <a href="https://www.indiatoday.in/" target= "_blank"rel="noreferrer" className="hover:underline">India Today</a>
        </li>
    </ul>
    </div>
</footer>
    </footer>
  )
}

export default Footer
