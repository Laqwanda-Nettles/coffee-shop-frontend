import { useState, useEffect } from "react";
import CartItem from "@/components/CartItem";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { loadCartFromLocalStorage, removeItemFromCart } from "@/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
    setCart(cartData);
  }, []);

  function handleCheckout() {
    router.push("/checkout");
  }

  function removeCartItem(itemId) {
    alert("You clicked to remove item ID: " + itemId);
    const updatedCart = removeItemFromCart(itemId);
    setCart(updatedCart);
  }

  const cartItemsJSX = cart.map((item) => {
    return (
      <CartItem
        key={item._id}
        product={item}
        handleClick={() => removeCartItem(item._id)}
      />
    );
  });
  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      <div className="mt-4 mb-5 border-b-2 border-neutral pb-4">
        <h1 className="text-center text-4xl text-primary font-bold">
          Shopping Cart
        </h1>
      </div>
      <div className="flex flex-col gap-5 justify-evenly items-center">
        {cartItemsJSX}
      </div>
      <div className="m-4 text-center">
        <Button
          label={"Checkout"}
          handleClick={handleCheckout}
          variant="btn-info btn-wide"
        />
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
