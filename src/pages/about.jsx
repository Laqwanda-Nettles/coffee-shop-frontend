import Check from "@/components/Check";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuantityBtn from "@/components/QuantityBtn";

export default function AboutPage() {
  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      <h1>About Us</h1>
      <Check />
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
