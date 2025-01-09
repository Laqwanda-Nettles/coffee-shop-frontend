import ProductCard from "@/components/ProductCard";
import products from "../../mocks/products.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const productsJSX = products.map((product) => {
    return <ProductCard key={product._id} product={product} />;
  });

  return (
    <div>
      <Navbar title={"Jazzed Up Coffee"} />
      <h1 className="text-4xl text-primary font-bold text-center">Products</h1>
      <div className="flex flex-wrap justify-evenly items-center gap-5 m-4">
        {productsJSX}
      </div>
      <Footer />
    </div>
  );
}
