import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useFetch(url, intialState = [], page = 1, limit = 5) {
  const [data, setData] = useState(intialState);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //fetch all products
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      // If token doesn't exist or is expired, redirect to login
      if (!token) {
        console.error("No token found, redirecting to login.");
        router.push("/signin"); // Redirect to login page
        return;
      }

      const paginatedUrl = `${url}?page=${page}&limit=${limit}`;

      const response = await fetch(paginatedUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorMessage = `Fetch error ${response.status}: ${response.statusText}`;

        //Handle expired token (401 Unauthorized)
        if (response.status === 401) {
          console.error("Unauthorized: Token expired.");
          localStorage.removeItem("token"); // Remove expired token

          router.push("/signin"); // Then redirect to login page
        } else {
          console.error(errorMessage);
        }

        throw new Error(errorMessage);
      } else {
        const productData = await response.json();

        // Check if the response contains the expected array
        if (Array.isArray(productData)) {
          setData(productData);
        } else if (
          productData.products &&
          Array.isArray(productData.products)
        ) {
          setData(productData.products);

          // Correct totalPages calculation
          if (productData.total) {
            const calculatedPages = Math.ceil(productData.total / limit);
            setTotalPages(calculatedPages);
          } else {
            setTotalPages(1); // Default to 1 if there's no total count
          }
        } else {
          console.error("Unexpected API response format:", productData);
          setData([]); // Set to an empty array if data isn't in expected format
          setError(true);
        }
        setError(false);
      }
    } catch (error) {
      console.error("Failed to fetch products: ", error);
      setError(error.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, page, limit]);

  return [error, loading, data, totalPages, fetchData];
}
