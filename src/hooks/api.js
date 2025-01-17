import { useEffect, useState } from "react";

export function useFetch(url, intialState) {
  const [data, setData] = useState(intialState);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  //fetch all products
  const fetchData = async () => {
    try {
      const result = await fetch(url);

      if (!result.ok) {
        console.error("Fetch failed with: ", result.status);
        setFetchError(true);
      } else {
        const productData = await result.json();
        console.log(productData);
        setData(productData);
      }
    } catch (error) {
      console.error("Failed to fetch products: ", error);
      setFetchError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [fetchError, loading, data, fetchData];
}
