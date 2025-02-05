import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";

export default function AccountPage() {
  const { user } = useAuth();
  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      <div className="bg-neutral-content min-h-screen p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6">
          {/* Profile Section */}
          <div className="flex items-center space-x-6 border-b pb-6 mb-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <svg
                  className="text-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  width={96}
                  height={96}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M11 7c0 1.66-1.34 3-3 3S5 8.66 5 7s1.34-3 3-3s3 1.34 3 3"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M4 13.75C4.16 13.484 5.71 11 7.99 11c2.27 0 3.83 2.49 3.99 2.75A6.98 6.98 0 0 0 14.99 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.38 1.19 4.49 3.01 5.75"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {user ? user.name : "Guest"}
              </h2>
              <p className="text-gray-600">
                {user ? user.email : "Not logged in"}
              </p>
              <button className="btn btn-sm btn-outline mt-2">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Order History */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-primary">
              Order History
            </h3>
            <div className="mt-4 space-y-4">
              <div className="card bg-base-100 shadow-md p-4">
                <p className="text-gray-700">
                  French Roast —{" "}
                  <span className="font-semibold">Delivered</span>
                </p>
                <p className="text-sm text-gray-500">
                  Ordered on: Jan 12, 2025
                </p>
              </div>
              <div className="card bg-base-100 shadow-md p-4">
                <p className="text-gray-700">
                  Chicory Blend —{" "}
                  <span className="text-warning font-semibold">Processing</span>
                </p>
                <p className="text-sm text-gray-500">
                  Ordered on: Jan 20, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-primary">Preferences</h3>
            <div className="form-control mt-4">
              <label className="cursor-pointer label">
                <span className="label-text">Receive email notifications</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  defaultChecked
                />
              </label>
            </div>
          </div>

          {/* Account Settings */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-primary">
              Account Settings
            </h3>
            <div className="mt-4 space-y-2">
              <button className="btn btn-outline w-full">
                Change Password
              </button>
              <button className="btn btn-outline w-full">
                Manage Subscription
              </button>
              <button className="btn btn-error w-full">Delete Account</button>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Need help?{" "}
              <a href="#" className="text-primary underline font-semibold">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
