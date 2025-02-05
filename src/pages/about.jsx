import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      <div className="bg-neutral-content min-h-screen p-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to{" "}
            <span className="text-secondary font-semibold italic">
              Jazzed Up Coffee
            </span>
            , where every sip is a celebration of flavor, tradition, and the
            soul of Louisiana. Inspired by the vibrant culture of New Orleans
            and the rich history of Southern coffee, we bring you bold,
            handcrafted brews with a touch of Creole magic.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            Our Story
          </h2>
          <div className="bg-white shadow-lg rounded-xl p-6 text-gray-800">
            <p className="leading-relaxed">
              <span className="font-semibold italic text-secondary">
                Jazzed Up Coffee
              </span>{" "}
              was born in the heart of Louisiana, where coffee isn't just a
              drink—it's a way of life. From the early French settlers who
              brought their love of dark roasts to the iconic café culture of
              New Orleans, we carry on the tradition of bold, smooth, and
              unforgettable coffee.
            </p>
            <p className="mt-4">
              We started as a small family-run roastery, sourcing the finest
              beans and slow-roasting them to perfection. What began as a
              passion project soon became a beloved staple in local markets,
              jazz festivals, and morning routines across the South. Today,
              we're proud to share our love for rich, soulful coffee with
              you—wherever you are.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white shadow-md p-6 rounded-lg">
              <h3 className="font-semibold text-xl">Southern Hospitality</h3>
              <p className="text-gray-700">
                We treat every customer like family. A warm welcome and a great
                cup of coffee—it's the Louisiana way.
              </p>
            </div>
            <div className="card bg-white shadow-md p-6 rounded-lg">
              <h3 className="font-semibold text-xl">Quality & Craft</h3>
              <p className="text-gray-700">
                We source premium beans and slow-roast them in small batches for
                maximum flavor and smoothness.
              </p>
            </div>
            <div className="card bg-white shadow-md p-6 rounded-lg">
              <h3 className="font-semibold text-xl">Community & Culture</h3>
              <p className="text-gray-700">
                From jazz clubs to Sunday brunch, our coffee is made to bring
                people together and keep traditions alive.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Meet the Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="avatar flex flex-col items-center">
              <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Founder"
                />
              </div>
              <p className="mt-2 text-gray-800 font-semibold">
                Alex Boudreaux, Founder
              </p>
              <p className="text-sm text-gray-600">
                The mastermind behind the blends, Alex grew up drinking chicory
                coffee with their grandparents and dreamed of creating the
                perfect brew.
              </p>
            </div>
            <div className="avatar flex flex-col items-center">
              <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Head Roaster"
                />
              </div>
              <p className="mt-2 text-gray-800 font-semibold">
                Jordan LeBlanc, Head Roaster
              </p>
              <p className="text-sm text-gray-600">
                A true coffee alchemist, Jordan ensures every batch of beans is
                roasted to perfection, balancing boldness with smoothness.
              </p>
            </div>
          </div>
        </div>

        {/* Our Coffee Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">
            Our Coffee
          </h2>
          <div className="bg-white shadow-lg rounded-xl p-6 text-gray-800">
            <p className="leading-relaxed">
              From classic dark roasts to rich, velvety blends with hints of
              praline and chicory, we craft coffee that embodies the soulful
              flavors of Louisiana. Whether you're sipping an espresso in the
              French Quarter or brewing a comforting cup at home,{" "}
              <span className="font-semibold italic text-secondary">
                Jazzed Up Coffee
              </span>{" "}
              brings the essence of New Orleans straight to your mug.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            Have questions or just want to say hello? Reach us at{" "}
            <span className="text-secondary font-semibold">
              hello@jazzedupcoffee.com
            </span>
            .
          </p>
        </div>
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
