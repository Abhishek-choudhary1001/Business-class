import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AboutUsPage from "./pages/AboutUs.jsx";
import BookingForm from "./components/BookingForm.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/booking" element={<BookingForm />} />

        {/* Optional future routes */}
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
