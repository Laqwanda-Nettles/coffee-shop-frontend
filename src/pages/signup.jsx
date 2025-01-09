import { useRouter } from "next/router";
import SignupForm from "@/components/SignupForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Signup() {
  const router = useRouter();
  function handleSignup() {
    alert("Sign up clicked!");
    router.push("/signup");
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
          <SignupForm buttonLabel="Sign Up" handleSignup={handleSignup} />
        </div>
      </div>

      <Footer info={"Jazzed Up Coffee"} />
    </div>
  );
}
