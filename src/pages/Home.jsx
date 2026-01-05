import React from "react";
import "../index.css";
import BookingForm from "../components/BookingForm.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx"
import "../Footer.css"
import "../Card.css"
import Cards from "../components/Cards.jsx"
import businessvideo from "../videos/video1.mp4"


export default function Home() {
  return (
    <>
      <section className="bg relative">
 
        <div className="navbr">
          <Navbar></Navbar>
        </div>

        <div className="absolute inset-0  flex justify-center items-center">
          <BookingForm />
        </div>


      </section>

      <section>

        <Cards></Cards>
      </section>



      <section>

<div>
    <Footer/>
</div>

      </section>
    </>
  );
}
