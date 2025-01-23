import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useFetch(url, intialState) {
  const [data, setData] = useState(intialState);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //fetch all products
  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      // If token doesn't exist or is expired, redirect to login
      if (!token) {
        console.error("No token found in localStorage");
        setFetchError(true);
        setLoading(false);
        router.push("/signin"); // Redirect to login page
        return;
      }

      const result = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!result.ok) {
        console.error(
          `Fetch failed with status: ${result.status} - ${result.statusText}`
        );

        //Handle expired token (401 Unauthorized)
        if (result.status === 401) {
          console.error("Token expired or unauthorized");
          localStorage.removeItem("token"); // Remove expired token
          setFetchError(true);
          router.push("/signin"); // Then redirect to login page
        } else {
          setFetchError(true); //For other errors
        }
      } else {
        const productData = await result.json();

        // Check if the response contains the expected array
        if (Array.isArray(productData)) {
          setData(productData);
        } else if (Array.isArray(productData.products)) {
          setData(productData.products);
        } else {
          console.error("Unexpected API response format:", productData);
          setData([]); // Set to an empty array if data isn't in expected format
          setFetchError(true);
        }
        setFetchError(false);
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
