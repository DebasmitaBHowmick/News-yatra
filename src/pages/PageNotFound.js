import { Link } from "react-router-dom";
import Page from "../assests/page.png";
import useTitle from "../hooks/useTitle";

const PageNotFound = (title) => {
useTitle(`page not found ${title}`);


  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
            <p className="text-5xl text-gray-700 font-bold my-10 dark:text-white"> 404! Oops! Page not Found </p>
            <div className="max-w-lg">
              <img className="rounded-lg" src={Page} alt="page not found" />
            </div>
        </div>

         <div className="flex justify-center mt-2">
          <Link to="/">
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2">
            Back to Home
            </button>
          </Link>
          
         </div>
      </section>
    </main>
  )
}

export default PageNotFound
