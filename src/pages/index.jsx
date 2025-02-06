import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function handleCtaClick() {
    router.push("/signup");
  }
  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      <Hero handleClick={handleCtaClick} />
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
