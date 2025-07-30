
import useFetch from '../hooks/useFetch';
import Card from './../components/Card';
import { Link } from 'react-router-dom';
import useTitle from './../hooks/useTitle';

const NewsList = ({apiPath, title}) => {
const {data: news} = useFetch(apiPath);
useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-10">
        <div className="flex justify-start flex-wrap other:justify-evenly items-stretch gap-4">
          {/* to handle empty state */}
          {news.length === 0 ? (
                    <p className="text-gray-500 text-lg">No news found.</p>
                  ) : (
                    news.map((item) => (
                      <div key={item.article_id}>
                          <Card key={item.article_id} news={item} />
                          <Link to={`/details/${item.article_id}`} 
                            state={{ article: item }} 
                            >
                                    
                                  </Link>
                      </div>
                              
                    ))
                  )}
                  
        </div>

        
      </section>
    </main>
  )
}

export default NewsList
