import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    //   fetch('http://localhost:8002/blogs')
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for resources");
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log(err.message);
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => {
      console.log("cleanup");
      abortCont.abort();
    };
  }, []);

  return { data, isPending, error };
};

export default useFetch;
