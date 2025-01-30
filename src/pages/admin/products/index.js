import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import { useFetch } from "@/hooks/api";
import AdminProductCard from "@/components/AdminProductCard";
//import useAuth from "@/hooks/auth";
import { useAuth } from "@/context/AuthContext";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;

  const [url, setUrl] = useState(`${BACKEND_URL}/products`);
  const [productsFetchError, loading, products] = useFetch(url, []);

  const { token } = useAuth();

  useEffect(() => {
    setUrl(`${BACKEND_URL}/products`);
  }, [category]);

  async function deleteProduct(product) {
    console.log("Attempting to delete product: ", product);
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
    <div>
      <Navbar title={"Jazzed Up Coffee"} />
      <h1 className="text-4xl text-primary font-bold text-center">Products</h1>
      <div className="breadcrumbs max-w-xs text-sm m-4">
        <ul className="cursor-pointer font-semibold">
          <li
            onClick={() => setUrl(`${BACKEND_URL}/products?category=beverages`)}
            className={`hover:text-secondary active:border-b-4 `}
          >
            Beverages
          </li>
          <li
            onClick={() => setUrl(`${BACKEND_URL}/products?category=pastries`)}
          >
            Pastries
          </li>
          <li
            onClick={() =>
              setUrl(`${BACKEND_URL}/products?category=merchandise`)
            }
          >
            Merchandise
          </li>
        </ul>
      </div>

      {loading ? (
        <Loading />
      ) : productsFetchError ? (
        <p className="text-red-400 text-lg text-center">
          Error fetching products. Please try again later.
        </p>
      ) : (
        <div className="flex flex-wrap justify-evenly items-center gap-5 m-4">
          {productsJSX}
        </div>
      )}
      <Footer />
    </div>
  );
}
