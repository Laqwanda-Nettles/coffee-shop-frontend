import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const loginURL = `${BACKEND_URL}/auth/login`;

export default function Signin() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSignIn(email, password) {
    alert("Sign In with: " + email);

    const payload = { email, password };

    //fetch POST /login
    const response = await fetch(loginURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push("/products");
    }

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
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
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left text-neutral-content">
            <h1 class="text-5xl font-bold">Welcome Back!</h1>
            <p class="py-6 text-xl">
              Your favorite brews and perks are just a click away. Sign in to
              keep the rhythm going and access your exclusive rewards, orders,
              and updates.
            </p>
          </div>
          <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"></div>
          <div className="flex flex-col gap-5">
            <LoginForm buttonLabel={"Login In"} handleLogin={handleSignIn} />
            <div className="text-neutral-content text-lg">
              <p>
                Haven&apos;t joined the band yet?{" "}
                <Link href="/signup" className="text-info italic font-semibold">
                  Sign Up Now
                </Link>{" "}
                and get in on the jazz!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer info={"Jazzed Up Coffee"} />
    </div>
  );
}
