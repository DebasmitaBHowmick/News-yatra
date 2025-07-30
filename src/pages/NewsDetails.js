import { useLocation, useParams } from "react-router-dom";
import Backup from "../assests/backup.png";
import useTitle from "../hooks/useTitle";


const NewsDetails = () => {
  const {article_id} = useParams(); //Not neccasaery just yo show id
  const {state} = useLocation()
  const item = state?.item;

  //dynamic title value from titlehook
  useTitle(item.title);

  if (!item) {
    return (<div className="p-5 text-center text-gray-700 dark:text-white text-2xl">
      <h2>Article Not found</h2>
      <p>This article might not be available. Please go back and try again.</p>
    </div>)
  }


const imageSrc = item.image_url && item.image_url !== "N/A" ? item.image_url : Backup;

  return (
    <main className="min-h-screen">
      <section className="flex justify-around flex-wrap py-6 m-auto">
        <div className="max-w-md h-auto">
          <img src={imageSrc} className=" rounded-lg my-5 mx-5"alt={item.title || "News"} onError={(e)=> {
            e.target.onError = null;
            e.target.src = Backup;
          }} />
        </div>

        <div className="max-w-5xl ml-4 px-5 text-gray-700 text-lg dark:text-white">
           <h1 className="text-2xl text-wrap mb-2 text-gray-700 font-bold dark:text-white dark:font-bold items-center">
                {item.title}
           </h1>
           <p className= "text-sm text-gray-700 dark:text-white mb-4 lg:text-left p-2">Article Id: {article_id}</p>
           <p className= "text-lg text-wrap text-gray-700 dark:text-white mb-10">Description:<br/>{item.description}</p>
        </div>
    
    <div>
      {item.category ? (
            <p className="text-base font-bold my-4 mr-4 text-gray-700 dark:text-white justify-between"> Category:
              {item.category.map((sort) => (
                <span className="mr-4 font-bold border-none border-gray-200 rounded dark:border-gray-600 dark:font-bold gap-4" key={sort}> {sort}</span>
              ))}
            </p>
          ) : ""}
      
      <p className="my-4 text-gray-700 dark:text-white">
            <span className="text-base mr-2 font-bold">Published: </span>
            <span>{item.pubDate} </span>
          </p>

        <p className="my-4  text-gray-700 dark:text-white">
            <span className="text-base mr-2 font-bold">Time Zone: </span>
            <span>{item.pubDateTZ} </span>
          </p>

          <p className="text-base my-4  text-gray-700 dark:text-white">
            <span className="mr-2 font-bold">Source: </span>
            <span>{item.source_name} </span>
          </p>

          <p className="text-base my-4  text-gray-700 dark:text-white">
            <span className="mr-2 font-bold">News Origin: </span>
            <span>{item.country} {item.category} </span>
          </p>

           <a href={item.link} target="_blank"
                        rel="noopener noreferrer" className="inline-flex items-center mb-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read Me!
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
    </div>
      </section>
    </main>
  )
}

export default NewsDetails
