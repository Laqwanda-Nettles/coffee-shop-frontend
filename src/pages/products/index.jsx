import ProductCard from "@/components/ProductCard";
//import data from "../../mocks/products.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "@/utils";
import Loading from "@/components/Loading";
import { useFetch } from "@/hooks/api";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;

  const [url, setUrl] = useState(`${BACKEND_URL}/products`);
  const [productsFetchError, loading, products, fetchProducts] = useFetch(
    url,
    []
  );
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //load cart from local storage
    const cartData = loadCartFromLocalStorage();
    setCart(cartData);
  }, []);

  useEffect(() => {
    setUrl(`${BACKEND_URL}/products`);
  }, [category]);

  // fetch products by category
  // const fetchProductsByCategory = async (category) => {
  //   try {
  //     const url = `${BACKEND_URL}/products?category=${category}`;
  //     const result = await fetch(url);
  //     const filterProductData = await result.json();
  //     setProducts(filterProductData);
  //   } catch (error) {
  //     console.error("Failed to fetch products by category: ", error);
  //     setProductsFetchError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (!category) {
  //     fetchProducts();
  //   } else {
  //     fetchProductsByCategory(category);
  //   }
  // }, [category]);

  function addProductToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  }

  console.log("Products data:", products);

  const productsJSX = Array.isArray(products) ? (
    products.map((product) => {
      function handleAddToCart() {
        alert("Added Item to Cart: " + product.name);
        addProductToCart(product);
      }

      return (
        <ProductCard
          key={product._id}
          product={product}
          handleClick={handleAddToCart}
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
            className={`hover:text-secondary`}
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
          <li onClick={() => setUrl(`${BACKEND_URL}/products?category=books`)}>
            Books
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
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-evenly items-center gap-5 m-4">
          {productsJSX}
        </div>
      )}
      <Footer />
    </div>
  );
}
