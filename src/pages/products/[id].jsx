import { useRouter } from "next/router";
import products from "../../mocks/products.json";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Get 'id' from route params
  const product = products[id] || {};

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
        <ProductCard product={product} handleClick={handleAddToCart} />
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
