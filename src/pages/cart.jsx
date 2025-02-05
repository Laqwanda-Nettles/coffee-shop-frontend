import CartItem from "@/components/CartItem";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeItemFromCart, updateItemQuantity } = useCart();
  const router = useRouter();

  function handleCheckout() {
    router.push("/checkout");
  }

  return (
    <div className="flex flex-col">
      <Navbar title={"Jazzed Up Coffee"} />
      <div className={`min-h-[84vh]`}>
        <div className="mt-4 mb-5 border-b-2 border-neutral pb-4">
          <h1 className="text-center text-4xl text-primary font-bold">
            Shopping Cart
          </h1>
        </div>
        <div className="flex flex-col gap-5 justify-evenly items-center">
          {cart.length === 0 ? (
            <p className="text-center text-info text-xl font-semibold">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item._id}
                product={item}
                onQuantityChange={updateItemQuantity}
                handleRemove={() => removeItemFromCart(item._id)}
              />
            ))
          )}
        </div>
        <div className="m-4 text-center">
          <Button
            label={"Checkout"}
            handleClick={handleCheckout}
            variant="btn-info btn-wide"
          />
        </div>
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </div>
  );
}
