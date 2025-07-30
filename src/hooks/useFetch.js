import { useState, useEffect} from "react"


const useFetch = (apiPath, queryTerm="") => {
const [data, setData] = useState([])
const [loading,setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function fetchNews() {
    //eslint-disable-next-line
    const API_KEY = "pub_c2db481093a24973b624d67da10c9dc6";
          const urlNew = [
            `apikey=${API_KEY}`,
            "country=in",
            "language=en",
            "timezone=Asia/Kolkata",
              apiPath,
              queryTerm ? `q=${encodeURIComponent(queryTerm)}` : ""];
     

  const url = `https://newsdata.io/api/1/latest?${urlNew.filter(Boolean).join("&")}`;
 

 try {
        setLoading(true);   // start loading
        setError(null);     // reset error

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        };
        const json = await response.json();

        if (json.results) {
          setData(json.results);
        } else {
          setData([]);
          console.warn("No result found", json);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message); // capture error
      } finally {
        setLoading(false); // done loading
      }
    }
    fetchNews();
  }, [apiPath, queryTerm]);

  return { data, loading, error };
};

export default useFetch;