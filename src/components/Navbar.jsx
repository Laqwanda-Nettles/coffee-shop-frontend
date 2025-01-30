import Link from "next/link";
import PropTypes from "prop-types";
import CartPreview from "./CartPreview";
import { useRouter } from "next/router";
import Button from "./Button";
import { useEffect, useState } from "react";
import { loadCartFromLocalStorage } from "@/utils";
//import useAuth from "@/hooks/auth";
import { useAuth } from "@/context/AuthContext";

export default function Navbar({ title, menuJSX }) {
  const [cart, setCart] = useState([]);
  const router = useRouter();
  const { user, isAuthenticated, clearAuth } = useAuth();

  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
    setCart(cartData);
  }, []);

  function handleViewCart() {
    router.push("/cart");
  }

  function handleLogout() {
    clearAuth();
    router.push("/");
  }

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-secondary-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>

            {isAuthenticated && user?.role === "admin" && (
              <>
                <li className="menu-title">Admin</li>
                <li>
                  <Link href="/admin/products">Manage Products</Link>
                </li>
                <li>
                  <Link href="/admin/products/create">Create Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="flex-1 navbar-center">
        <Link href="/" className="btn btn-ghost text-xl">
          {title}
        </Link>
      </div>
      <div className="flex-none navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm badge-secondary indicator-item"></span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 text-base-content z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              {cart.map((item) => (
                <CartPreview key={item._id} product={item} />
              ))}
              <div className="card-actions">
                <Button
                  label={"View Cart"}
                  handleClick={handleViewCart}
                  variant="btn-primary btn-block"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {isAuthenticated ? (
              <>
                <li>
                  <Link href="/account">Account</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/signin">Sign In</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
