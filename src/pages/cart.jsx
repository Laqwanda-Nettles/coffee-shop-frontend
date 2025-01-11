import CartItem from "@/components/CartItem";
import cart from "../mocks/cart.json";
import Button from "@/components/Button";
import { useRouter } from "next/router";

export default function Cart() {
  const router = useRouter();

  function handleCheckout() {
    alert("Checkout button clicked!");
    router.push("/checkout");
  }

  const items = cart.products;
  const cartItemsJSX = items.map((item) => {
    function removeCartItem() {
      alert("You clicked to remove: " + item.name);
    }

    return (
      <CartItem key={item._id} product={item} handleClick={removeCartItem} />
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
