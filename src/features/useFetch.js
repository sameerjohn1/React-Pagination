import { useState, useEffect } from 'react';

const useFetch = (url1, url2) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Make requests to both APIs using Promise.all
        const [response1, response2] = await Promise.all([
          fetch(url1),
          fetch(url2)
        ]);

        // Check if the requests were successful (status code 2xx)
        if (!response1.ok || !response2.ok) {
          throw new Error('One or more API requests failed');
        }

        // Parse the responses
        const data1 = await response1.json();
        const data2 = await response2.json();

        // Combine the results into one object
        const combinedData = {
          api1: data1,
          api2: data2
        };

        // Set data and loading state
        setData(combinedData);
        setLoading(false);
      } catch (error) {
        // Set error and loading state if there's an error
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url1, url2]); // Dependency on the URLs ensures the effect runs when the URLs change

  return { data, loading, error };
};

export default useFetch;