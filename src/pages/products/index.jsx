import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { useFetch } from "@/hooks/api";
import { useCart } from "@/context/CartContext";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addProductToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [url, setUrl] = useState(`${BACKEND_URL}/products`);
  const [productsFetchError, loading, products, totalPages] = useFetch(
    url,
    [],
    currentPage,
    itemsPerPage
  );

  useEffect(() => {
    const categoryQuery = selectedCategory
      ? `category=${selectedCategory}&`
      : "";
    setUrl(
      `${BACKEND_URL}/products?${categoryQuery}page=${currentPage}&limit=${itemsPerPage}`
    );
  }, [selectedCategory, currentPage]);

  return (
    <div className="flex flex-col">
      <Navbar title={"Jazzed Up Coffee"} />
      <div className={`min-h-[84vh]`}>
        <h1 className="text-4xl text-primary font-bold text-center mt-4">
          Products
        </h1>
        <div className="breadcrumbs max-w-xs text-md m-4">
          <ul className="cursor-pointer font-semibold">
            <li
              onClick={() => setSelectedCategory("")}
              className={`hover:text-secondary dark:hover:text-success`}
            >
              All
            </li>
            <li
              onClick={() => setSelectedCategory("beverages")}
              className={`hover:text-secondary dark:hover:text-success`}
            >
              Beverages
            </li>
            <li
              onClick={() => setSelectedCategory("pastries")}
              className={`hover:text-secondary dark:hover:text-success`}
            >
              Pastries
            </li>
            <li
              onClick={() => setSelectedCategory("merchandise")}
              className={`hover:text-secondary dark:hover:text-success`}
            >
              Merchandise
            </li>
          </ul>
        </div>

        {productsFetchError ? (
          <p className="text-red-400 text-lg text-center">
            Error fetching products. Please try again later.
          </p>
        ) : (
          ""
        )}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <Loading />
          </div>
        ) : (
          <div className="flex flex-wrap justify-evenly items-center gap-5 m-4">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                handleClick={() => addProductToCart(product)}
              />
            ))}
          </div>
        )}

        {/* Pagination Section */}
        <div className="flex justify-center my-6">
          <div className="join">
            <button
              className="join-item btn btn-outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              «
            </button>
            <button className="join-item btn btn-outline">
              {currentPage} / {totalPages}
            </button>
            <button
              className="join-item btn btn-outline"
              disabled={currentPage >= totalPages || totalPages === 1}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              »
            </button>
          </div>
        </div>
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </div>
  );
}
