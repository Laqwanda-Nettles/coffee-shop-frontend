import { useState, useEffect } from "react";
import CartItem from "@/components/CartItem";
//import cartData from "../mocks/cart.json";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { loadCartFromLocalStorage, removeItemFromCart } from "@/utils";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
    setCart(cartData);
  }, []);

  function handleCheckout() {
    alert("Checkout button clicked!");
    router.push("/checkout");
  }

  function removeCartItem(itemId) {
    alert("You clicked to remove item ID: " + itemId);
    const updatedCart = removeItemFromCart(itemId);
    setCart(updatedCart);
  }

  //const items = cart.products;
  const cartItemsJSX = cart.map((item) => {
    // function removeCartItem() {
    //   alert("You clicked to remove: " + item.name);
    // }

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
    </>
  );
}
