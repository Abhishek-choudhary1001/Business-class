import React, { useEffect, useState } from "react";
import "../index.css";
import logo from "../images/BCL_business.png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-14 md:h-20" />

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-6 font-sans text-lg font-semibold uppercase
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          <li>
    <NavLink to="/about" className="hover:text-gray-800">
      About us
    </NavLink>
  </li>

  <li>
    <NavLink to="/products"  className="hover:text-gray-800">
      Products
    </NavLink>
  </li>

  <li>
    <button
      onClick={() => scrollToSection("services")}
      className="hover:text-gray-800 cursor-pointer">
      Service
    </button>
  </li>

  <li>
    <button
      onClick={() => scrollToSection("contact")}
      className="hover:text-gray-800 cursor-pointer">
      Contact Details
    </button>
  </li>

  <li>
    <NavLink to="/blog"  className="hover:text-gray-800">
      Blog
    </NavLink>
  </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl focus:outline-none
            ${scrolled ? "text-black" : "text-white"}
          `}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-96" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col bg-white text-black px-6 py-4 space-y-4 font-semibold uppercase">
        <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "text-red-500" : "hover:text-red-500"
      }
    >
      About us
    </NavLink>
  </li>

  <li>
    <NavLink to="/products"  className="hover:text-gray-800">
      Products
    </NavLink>
  </li>

  <li>
    <NavLink to="/#services"  className="hover:text-gray-800">
      Service
    </NavLink>
  </li>

  <li>
    <NavLink to="/#contact"  className="hover:text-gray-800">
      Contact Details
    </NavLink>
  </li>

  <li>
    <NavLink to="/blog"  className="hover:text-gray-800">
      Blog
    </NavLink>
  </li>
        </ul>
      </div>
    </nav>
  );
}
