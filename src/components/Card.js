import { Link} from "react-router-dom";
import Backup from "../assests/backup.png";


const Card = ({news}) => {

const {article_id, title, description, image_url, link} = news;
const imageSrc = image_url && image_url !== "N/A" ? image_url : Backup;


  return (
    <div>
      <div className="max-w-sm min-h-auto flex flex-col justify-between bg-white border border-none border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3 p-4">
                <Link to= {`/news/category/${article_id}`} state={{ item: news }}>
                    <img className="rounded-t-lg min-h-[250px]" src={imageSrc}  alt={title || "News Image"}
                    onError={(e) => {
              // Fallback if image fails to load
                    e.target.onerror = null; // Prevents infinite loop
                    e.target.src = Backup;
            }}/>    
                </Link>

                <div className="mb-4">
                    <Link to={`/news/category/${article_id}`}>
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </Link>
                    {description ? (
                        <p className="line-clamp-3 mb-3 font-normal text-gray-700 dark:text-gray-400">{description?.split(" ").slice(0, 20).join(" ") + (description?.split(" ").length > 20 ? "..." : "")}</p>
                    ) : ""}
                    
                    <a href={link} target="_blank"
                        rel="noopener noreferrer" className="inline-flex items-center mb-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
    </div>
  )
}

export default Card
