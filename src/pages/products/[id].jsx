import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "@/utils";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Get 'id' from route params

  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
    setCart(cartData);
  }, []);

  function addProductToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  }

  const url = `${BACKEND_URL}/products/${id}`;

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.statusText}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
        setError("Error fetching product.");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);
  function handleAddToCart() {
    if (!product) {
      return;
    }
    alert("Added Item to Cart: " + product.name);
    addProductToCart(product);
  }

  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      <div className="flex flex-col items-center m-4 gap-4">
        <h1 className="text-4xl font-bold text-primary text-center mb-4">
          Product Page for product &#35; {id}
        </h1>
        {error && <p className="text-red-400 text-lg text-center">{error}</p>}
        {loading ? (
          <Loading />
        ) : product ? (
          <ProductCard product={product} handleClick={handleAddToCart} />
        ) : (
          <p className="text-center text-xl text-red-400">Product not found.</p>
        )}
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
