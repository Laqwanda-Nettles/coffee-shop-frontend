import ProductCard from "@/components/ProductCard";
import data from "../../mocks/products.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "@/utils";

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //load cart from local storage
    const cartData = loadCartFromLocalStorage();
    setCart(cartData);

    setProducts(data);
  }, []);

  useEffect(() => {
    if (!category) {
      setProducts(data);
    } else {
      const filterProductData = data.filter((product) => {
        return product.category === category;
      });

      setProducts(filterProductData);
    }
  }, [category]);

  function addProductToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  }

  const productsJSX = products.map((product) => {
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
