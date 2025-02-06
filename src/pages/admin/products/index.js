import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import { useFetch } from "@/hooks/api";
import AdminProductCard from "@/components/AdminProductCard";
import { useAuth } from "@/context/AuthContext";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");

  const [page, setPage] = useState(1);
  const limit = 5;

  const [url, setUrl] = useState(`${BACKEND_URL}/products`);
  const [productsFetchError, loading, products, totalPages] = useFetch(
    url,
    [],
    page,
    limit
  );

  const { token } = useAuth();

  useEffect(() => {
    if (selectedCategory) {
      const categoryQuery = selectedCategory
        ? `category=${selectedCategory}&`
        : "";
      setUrl(`${BACKEND_URL}/products?${categoryQuery}`);
    } else {
      setUrl(`${BACKEND_URL}/products`);
    }
  }, [selectedCategory]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  async function deleteProduct(product) {
    const productId = product._id;

    try {
      const response = await fetch(`${BACKEND_URL}/products/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Product deleted successfully!");

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error occurred when deleting product: ", error);
    }
  }

  const productsJSX = Array.isArray(products) ? (
    products.map((product) => {
      function handleDeleteProduct() {
        alert("Deleted item: " + product.name);
        deleteProduct(product);
      }

      function handleProductEdit() {
        router.push(`/admin/products/${product._id}`);
      }

      return (
        <AdminProductCard
          key={product._id}
          product={product}
          handleClick={handleDeleteProduct}
          secondaryHandleClick={handleProductEdit}
        />
      );
    })
  ) : (
    <p className="text-center text-red-400">No products available.</p>
  );
  return (
    <div className="flex flex-col">
      <Navbar title={"Jazzed Up Coffee"} />
      <div className={`min-h-[84vh]`}>
        <h1 className="mt-4 text-4xl text-primary font-bold text-center">
          Manage Products
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

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <Loading />
          </div>
        ) : productsFetchError ? (
          <p className="text-red-400 text-lg text-center">
            Error fetching products. Please try again later.
          </p>
        ) : (
          <div className="flex flex-wrap justify-evenly items-center gap-5 m-4">
            {productsJSX}
          </div>
        )}

        {/* Pagination Section */}
        <div className="flex justify-center my-6">
          <div className="join">
            <button
              className="join-item btn btn-outline"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              «
            </button>
            <button className="join-item btn btn-outline">{page}</button>
            <button
              className="join-item btn btn-outline"
              onClick={handleNextPage}
              disabled={page === totalPages}
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
