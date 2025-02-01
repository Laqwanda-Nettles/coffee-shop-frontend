import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import { useFetch } from "@/hooks/api";
import { useCart } from "@/context/CartContext";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;
  const { addProductToCart } = useCart();
  const [url, setUrl] = useState(`${BACKEND_URL}/products`);
  const [productsFetchError, loading, products] = useFetch(url, []);

  useEffect(() => {
    setUrl(`${BACKEND_URL}/products`);
  }, [category]);

  return (
    <div>
      <Navbar title={"Jazzed Up Coffee"} />
      <h1 className="text-4xl text-primary font-bold text-center">Products</h1>
      <div className="breadcrumbs max-w-xs text-sm m-4">
        <ul className="cursor-pointer font-semibold">
          <li
            onClick={() => setUrl(`${BACKEND_URL}/products?limit=50`)}
            className={`hover:text-secondary active:border-b-4 `}
          >
            All
          </li>
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
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              handleClick={() => addProductToCart(product)}
            />
          ))}
        </div>
      )}
      {/* {loading ? <Loading /> : { productsJSX }} */}
      <Footer info={"Jazzed Up Coffee"} />
    </div>
  );
}
