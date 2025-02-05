import CartSummary from "@/components/CartSummary";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Checkout() {
  function handlePayment(name, email, address) {
    alert(`Thank You ${name}, for your purchase!`);
  }

  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      <div className={`min-h-[84vh]`}>
        <div className="m-4 flex justify-evenly items-start gap-4">
          <CheckoutForm handleClick={handlePayment} />
          <div className="bg-white dark:bg-primary-content rounded-lg shadow-lg">
            <CartSummary />
          </div>
        </div>
      </div>

      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
