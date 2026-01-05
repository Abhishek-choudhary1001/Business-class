import React from 'react'
import "../Footer.css"

export default function Footer() {
  return (
   <>
   

      <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>BusinessClass</h2>
          <p>
            Elevating your journey with comfort, reliability, and premium
            service worldwide.
          </p>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <ul className="social">
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BusinessClass. All rights reserved.</p>
      </div>
    </footer>
   
   
   </>
  )
}
