import Button from "./Button";

export default function CheckoutForm({ handleClick }) {
  return (
    <div className="bg-base-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>
        <form className="space-y-4">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="1234 Street Name, City"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Card Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Card Details</span>
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Place Order Button */}
          <div>
            <Button
              label={"Place Order"}
              handleClick={handleClick}
              variant="btn-primary btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
