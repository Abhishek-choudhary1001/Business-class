import React from 'react'
import "../Card.css"




const deals = [
  {
    from: "Dubai",
    to: "London",
    price: "$1,999",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
  {
    from: "Frankfurt",
    to: "Dubai",
    price: "$1,799",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    from: "Dubai",
    to: "Delhi",
    price: "$999",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  },

 {
    from: "Singapore",
    to: "Madrid",
    price: "$3,999",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFkcmlkfGVufDB8fDB8fHww",
  },
  {
    from: "Paris",
    to: "Sydney",
    price: "$2,799",
    image:
      "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN5ZG5leXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    from: "Toronto",
    to: "Canada",
    price: "$1999",
    image:"https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FuYWRhfGVufDB8fDB8fHww",
  },

];






const service = [
  {
    info: "Easy Bookings",
    message:"Simply contact us directly, select an offer from your personalized quote, easily pay online and receive your flight ticket via email in no time.",
    image:"https://media.istockphoto.com/id/882396802/photo/flight-search-on-internet-buy-ticket-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=mVjmso6ooz1J-8RIIBKG-30GJg0FmPqmRR2kIgJqhls=",
  },
  {
    info: "24/7 Support",
  message:"Your personal flight expert is 24/7 available for you, to assist you with any booking or question.",
    image:
      "https://media.istockphoto.com/id/917221394/photo/full-time-service-concept-24-7-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=Eolz96_AIm1g3lK0BAQFyw-hMBH_tVVXwor7UO-KBV8=",
  },
  {
    info: "Flexible Fares",
   message:"Our flexible fares and easy changes ensure that your travel plans are always in your control.",
    image:
      "https://plus.unsplash.com/premium_photo-1680363254554-d1c63ad8d33d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpY2VzfGVufDB8fDB8fHww",
  },


    {
    info: "Exclusive Deals",
    message:"Take advantage of our team’s deep knowledge of the airline industry, with our reduced ticket fares and exclusive offers we find you “Luxurious Flights for Less”.",
    image:"https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhjbHVzaXZlJTIwZGVhbHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    info: "Complex Itineraries",
  message:"No matter what type of trip you have in mind, whether a one-way trip, a round-trip, or a complex multi-city itinerary, we’ve got you covered.",
    image:
      "https://images.unsplash.com/photo-1636815529433-d1cd851d5d50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29tcGxleCUyMEl0aW5lcmFyaWVzfGVufDB8fDB8fHww",
  },
  {
    info: "Corporate Travel Management",
   message:"We’ve been providing business travelers with dedicated service, flexible tickets, and outstanding value for money for many years.",
    image:
      "https://images.unsplash.com/photo-1759706000998-b09cded2de5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29ycG9yYXRlJTIwVHJhdmVsJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },

  
];




export default function Cards() {
  return (
  <>
  
  
  
  
    <section className="deals-section">
      <p className="subtitle">BEST SELLING</p>
      <h2 className="title">Business Class Flight Deals</h2>

      <div className="cards-wrapper">
        {deals.map((deal, index) => (
          <div className="deal-card" key={index}>
            <img src={deal.image} alt={`${deal.from} to ${deal.to}`} />
            <div className="card-body">
              <p className="route">
                {deal.from} to
              </p>
              <h3>{deal.to}</h3>

              <div className="card-footer">
                <span className="class">Business Class</span>
                <span className="price">{deal.price}</span>
              </div>
              {/* <div className='btn' >
  <button>Book now</button>
              </div> */}
            
            </div>
          </div>
        ))}
      </div>
    </section >









    <section className='deals-section' >





      <h1 className="title2">What Sets Us Apart</h1>
       <h2 className='subtitle2' > ADVANTAGES WHEN BOOKING WITH US</h2>
     

      <div className="cards-wrapper">
        {service.map((service, index) => (
          <div className="deal-card2" key={index}>
            <img src={service.image} alt={`${service.info}`} />
            <div className="card-body">
              
              <h3>{service.info}</h3>

              <div className="card-footer">
                <span className="class">{service.message}</span>
                <span className="price">{service.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>





    </section>



  
  
  
  
  </>
  )
}
