import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import BookingForm from "./components/BookingForm.jsx"



function App() {
  return (
    <>
     <Home></Home>
  

    </>
  );
}

export default App;








//  <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>