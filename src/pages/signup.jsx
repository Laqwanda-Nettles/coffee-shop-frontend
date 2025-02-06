import { useRouter } from "next/router";
import SignupForm from "@/components/SignupForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const registerURL = `${BACKEND_URL}/auth/register`;

export default function Signup() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSignup(user) {
    // fetch POST /register
    const response = await fetch(registerURL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.error) {
      setError(data.error);
    } else {
      router.push("/signin");
    }
  }

  return (
    <div>
      <Navbar title={"Jazzed Up Coffee"} />
      <div
        class="hero bg-base-200 min-h-screen"
        style={{
          backgroundImage: "url(signup.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left text-neutral-content">
            <h1 class="text-5xl font-bold">Sign Up!</h1>
            <p class="py-6 text-xl">
              Stay in tune with all things Jazzed Up Coffee. Sign up today for
              exclusive perks, member-only discounts, and updates that'll keep
              your mornings swinging!
            </p>
          </div>
          <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"></div>
          <div className="flex flex-col gap-5">
            <SignupForm buttonLabel="Sign Up" handleSignup={handleSignup} />
            <div className="text-neutral-content text-lg">
              <p>
                Already have an account?{" "}
                <Link href="/signin" className="text-info italic font-semibold">
                  Login In
                </Link>
              </p>
            </div>
          </div>
          {error && <p>{error}</p>}
        </div>
      </div>

      <Footer info={"Jazzed Up Coffee"} />
    </div>
  );
}
