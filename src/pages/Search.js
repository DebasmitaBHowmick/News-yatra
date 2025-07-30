import useTitle from '../hooks/useTitle';
import { useSearchParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Card from './../components/Card';

const Search = ({ apiPath}) => {
  
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q")?.trim() || "";

  const { data: news, loading, error } = useFetch(apiPath, queryTerm);
  useTitle(`Search for result ${queryTerm}`)

  if (!queryTerm) {
    return (
      <main className="max-w-7xl mx-auto py-10 text-center">
        <p className="text-xl text-gray-500 dark:text-gray-300">
          Please enter a valid query to view results.
        </p>
      </main>
    );
  }



  return (
    <main className="max-w-7xl mx-auto py-6">
      <section className="text-center mb-6">
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">
          {news.length === 0 && !loading && !error
            ? `No results found for "${queryTerm}"`
            : `Search results for "${queryTerm}"`}
        </p>

        {loading && (
          <p className="text-blue-600 text-lg mt-2">Loading results...</p>
        )}

        {error && (
          <div className="text-red-600 mt-3">
            <p>Something went wrong: {error}</p>
            <Link
              to="/" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-red-700">
              Go Back
            </Link>
          </div>
        )}

        {news.length === 0 && !loading && !error && (
          <p className="text-gray-500 mt-2">Try a different keyword or check your spelling.</p>
        )}
      </section>

      {!loading && !error && (
        <section>
          <div className="flex flex-wrap justify-start gap-4">
            {news.map((item) => (
              <Card key={item.article_id} news={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Search;
