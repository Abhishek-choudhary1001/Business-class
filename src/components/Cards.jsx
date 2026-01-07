import React from "react";
import PremiumOfferSection from "./PremiumOfferSection";

const deals = [
  {
    from: "Dubai",
    to: "London",
    price: "$1,999",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
  {
    from: "Frankfurt",
    to: "Dubai",
    price: "$1,799",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    from: "Dubai",
    to: "Delhi",
    price: "$999",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  },
  {
    from: "Singapore",
    to: "Madrid",
    price: "$3,999",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325",
  },
  {
    from: "Paris",
    to: "Sydney",
    price: "$2,799",
    image: "https://images.unsplash.com/photo-1598948485421-33a1655d3c18",
  },
  {
    from: "Toronto",
    to: "Canada",
    price: "$1,999",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225",
  },
];

const service = [
  {
    info: "Easy Bookings",
    message:
      "Simply contact us directly, select an offer from your personalized quote, easily pay online and receive your flight ticket via email in no time.",
    image:
      "https://media.gettyimages.com/id/2219543768/photo/woman-booking-travel-using-smartphone-and-credit-card-at-home.jpg?s=612x612&w=0&k=20&c=88psnBkDg6w6Zcim7v9P3KOxB2kZdHbaAzWjII6zqjQ=",
  },
  {
    info: "24/7 Support",
    message:
      "Your personal flight expert is 24/7 available for you, to assist you with any booking or question.",
    image:
      "https://media.gettyimages.com/id/1174438170/photo/providing-you-with-24-7-support.jpg?s=612x612&w=0&k=20&c=QRaXdassDpPFhHkLyI8onC7tDZoCJPGZcku8geXb0F0=",
  },
  {
    info: "Flexible Fares",
    message:
      "Our flexible fares and easy changes ensure that your travel plans are always in your control.",
    image:
      "https://plus.unsplash.com/premium_photo-1680363254554-d1c63ad8d33d",
  },
  {
    info: "Exclusive Deals",
    message:
      "Take advantage of our team’s deep knowledge of the airline industry, with our reduced ticket fares and exclusive offers we find you luxurious flights for less.",
    image:
      "https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a",
  },
  {
    info: "Complex Itineraries",
    message:
      "No matter what type of trip you have in mind, whether one-way, round-trip, or complex multi-city itinerary, we’ve got you covered.",
    image:
      "https://images.unsplash.com/photo-1636815529433-d1cd851d5d50",
  },
  {
    info: "Corporate Travel Management",
    message:
      "We’ve been providing business travelers with dedicated service, flexible tickets, and outstanding value for money for many years.",
    image:
      "https://images.unsplash.com/photo-1759706000998-b09cded2de5a",
  },
];

export default function Cards() {
  return (
    <>
      {/* DEALS SECTION */}
      <section className="px-4 md:px-10 lg:px-20 py-16">
        <p className="text-center text-sm font-semibold text-red-500 uppercase">
          Best Selling
        </p>
        <h2 className="text-center text-2xl md:text-4xl font-bold mt-2">
          Business Class Flight Deals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={deal.image}
                alt={`${deal.from} to ${deal.to}`}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />

              <div className="p-5">
                <p className="text-sm text-gray-500">{deal.from} to</p>
                <h3 className="text-lg font-semibold">{deal.to}</h3>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">
                    Business Class
                  </span>
                  <span className="font-bold text-red-600">
                    {deal.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM OFFER */}
      <PremiumOfferSection />

      {/* SERVICES SECTION */}
      <section className="px-4 md:px-10 lg:px-20 py-16 bg-gray-50">
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          What Sets Us Apart
        </h1>
        <h2 className="text-center text-sm font-semibold text-gray-500 uppercase mt-2">
          Advantages When Booking With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {service.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.info}
                className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {item.info}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
