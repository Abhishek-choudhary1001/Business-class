import React from "react";
import "../index.css";
import logo from "../images/BCL_business.png";

export default function Navbar() {
  return (
    <>
      <section>
        <div className="nav  bg-white/60">
          <div className="nav_logo" >
            <img  className="nav_logo"  src= {logo} alt="logo" />
          </div>

          <div>
            <ul className="menulist space-x-6  font-sans text-sm font-semibold  uppercase">
              <li>About us</li>
              <li> Products</li>
              <li> Service</li>
              <li>Contact Details</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
