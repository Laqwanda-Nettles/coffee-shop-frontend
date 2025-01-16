import { useState } from "react";
import Button from "./Button";

export default function CheckoutForm({ handleClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardDetails, setCardDetails] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const address = e.target.address.value;

    //reset on submit
    setName("");
    setEmail("");
    setAddress("");
    setCardDetails("");

    handleClick(name, email, address);
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="input input-bordered w-full"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            className="input input-bordered w-full"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* Address */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="1234 Street Name, City"
            className="input input-bordered w-full"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Card Details */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Card Details</span>
          </label>
          <input
            type="text"
            name="cardDetails"
            id="cardDetails"
            placeholder="1234 5678 9012 3456"
            className="input input-bordered w-full"
            required
            value={cardDetails}
            onChange={(e) => setCardDetails(e.target.value)}
          />
        </div>

        {/* Place Order Button */}
        <div>
          <Button label={"Place Order"} variant="btn-primary btn-block" />
        </div>
      </form>
    </div>
  );
}
