import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Get 'id' from route params

  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addProductToCart } = useCart();

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
    <div className="flex flex-col">
      <Navbar title={"Jazzed Up Coffee"} />
      <div className={`min-h-[84vh]`}>
        <div className="flex flex-col items-center m-4 gap-4">
          <h1 className="text-4xl font-bold text-primary text-center mb-4">
            {product.name}
          </h1>
          {error && <p className="text-red-400 text-lg text-center">{error}</p>}
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <Loading />
            </div>
          ) : product ? (
            <ProductCard product={product} handleClick={handleAddToCart} />
          ) : (
            <p className="text-center text-xl text-red-400">
              Product not found.
            </p>
          )}
        </div>
        <div className="fixed bottom-0"></div>
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </div>
  );
}
