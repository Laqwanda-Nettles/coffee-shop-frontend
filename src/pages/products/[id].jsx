import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useFetch } from "@/hooks/api";
import Loading from "@/components/Loading";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Get 'id' from route params

  const url = `${BACKEND_URL}/products/${id}`;
  const [error, loading, product] = useFetch(url, {});

  function handleAddToCart() {
    alert("Added Item to Cart: " + product.name);
  }

  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      <div className="flex flex-col items-center m-4 gap-4">
        <h1 className="text-4xl font-bold text-primary text-center mb-4">
          Product Page for product &#35; {id}
        </h1>
        {error ? (
          <p className="text-red-400 text-lg text-center">
            Error fetching product
          </p>
        ) : (
          ""
        )}
        {loading ? (
          <Loading />
        ) : (
          <ProductCard product={product} handleClick={handleAddToCart} />
        )}
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
