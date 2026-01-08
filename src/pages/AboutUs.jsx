import React from "react";
import Footer from "../components/Footer.jsx";
import FAQSection from "../components/FAQ/FAQSection.jsx";
import { FaPlane, FaHeadset, FaGlobe, FaStar } from "react-icons/fa"; // Example icons

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white text-gray-900">

      {/* Hero / Stats */}
      <section
        className="relative py-24 text-center px-6 flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-pink-50/60"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We make premium travel accessible.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12">
            Through exclusive fares, tailored itineraries, and dedicated 24/7 support,
            enjoy seamless journeys from booking to arrival.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {[
              ["350,000+", "Flights Booked", <FaPlane className="mx-auto mb-2 text-blue-600" />],
              ["44%", "Average Savings", <FaStar className="mx-auto mb-2 text-yellow-400" />],
              ["4.9/5", "Customer Rating", <FaStar className="mx-auto mb-2 text-pink-500" />],
              ["52%", "Booking Loyalty", <FaGlobe className="mx-auto mb-2 text-green-500" />],
            ].map(([value, label, icon], i) => (
              <div key={i} className="text-center">
                {icon}
                <div className="text-3xl md:text-4xl font-bold text-blue-700">{value}</div>
                <p className="text-sm text-gray-600 uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://media.istockphoto.com/id/2187073474/photo/digital-identification-concept-electronic-id-smartcard-passport-card-accessing-databases-by.webp?a=1&b=1&s=612x612&w=0&k=20&c=46x27ckAZsaSgBxsaqGZdz9m2WtXlyY3bvk5JuQCXKM="
            alt="Team"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Founded in Florida in 2018, Business‑Class.com has become a trusted leader
              in luxury travel. Our multicultural team connects travelers with premium
              business class fares, tailored itineraries, and 24/7 support.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We've established direct partnerships with top airlines, giving us access
              to unpublished fares, helping travelers save up to 60%. Our mission is to
              redefine premium air travel by offering exclusive access paired with
              personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* WHY TRAVELERS CHOOSE US */}
      <section className="py-20 px-6 bg-pink-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Travelers Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Dedicated Personal Advisors",
              desc: "Our advisors deliver tailored travel solutions and premium service.",
              icon: <FaHeadset className="text-pink-500 text-3xl mb-4" />,
            },
            {
              title: "Global Partnerships & Exclusive Deals",
              desc: "Access to exclusive fares through airline partnerships.",
              icon: <FaGlobe className="text-green-500 text-3xl mb-4" />,
            },
            {
              title: "24/7 Global Support",
              desc: "We provide seamless assistance anytime, anywhere.",
              icon: <FaHeadset className="text-blue-500 text-3xl mb-4" />,
            },
            {
              title: "Seamless Booking Experience",
              desc: "Enjoy easy booking through our platform or with our experts.",
              icon: <FaPlane className="text-purple-500 text-3xl mb-4" />,
            },
            {
              title: "Premium Perks & Extras",
              desc: "Receive extra benefits to enhance your travel journey.",
              icon: <FaStar className="text-yellow-400 text-3xl mb-4" />,
            },
            {
              title: "People‑First Philosophy",
              desc: "Your satisfaction is our top priority.",
              icon: <FaStar className="text-pink-400 text-3xl mb-4" />,
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
            >
              {card.icon}
              <h3 className="font-semibold text-xl mb-3">{card.title}</h3>
              <p className="text-gray-700">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Global Presence</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          We have offices and teams all around the world to ensure you’re covered no matter where your journey takes you.
        </p>
        <img
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1470&q=80"
          alt="Global map"
          className="mx-auto rounded-xl shadow-lg"
        />
      </section>

      {/* QUOTE FROM CEO */}
      <section className="py-16 px-6 bg-pink-50 text-center">
        <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto">
          “Travel isn’t one-size-fits-all. We combine technology with human expertise
          to deliver seamless, personalized service — 24/7.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-900">Brian Crist</p>
        <p className="text-sm text-gray-600">CEO and Founder</p>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <FAQSection />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
