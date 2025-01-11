import CartSummary from "@/components/CartSummary";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Checkout() {
  function handlePayment() {
    alert("Thank You for purchase!");
  }

  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      <div className="m-4">
        <CartSummary />
        <CheckoutForm handleClick={handlePayment} />
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
