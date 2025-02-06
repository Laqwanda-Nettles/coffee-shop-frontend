import CartSummary from "@/components/CartSummary";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Checkout() {
  const [alert, setAlert] = useState(false);
  const [userName, setUserName] = useState("");
  function handlePayment(name, email, address) {
    setUserName(name);
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  }

  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      {alert && (
        <div className="alert alert-success m-4 text-lg font-semibold">
          <span>{`Thank You ${userName}, for your purchase!`}</span>
        </div>
      )}
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
