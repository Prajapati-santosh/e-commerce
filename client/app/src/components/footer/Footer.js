import React from 'react';
import './footer.scss';
import Logo from '../../assets/img/logo.png'
import { PiInstagramLogo } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <div className="top">
        <div className="section logo-subscribe">
          <div className="logo">
            <img src={Logo} alt="Company Logo" />
          </div>
          <div className="subscribe">
            <h4>Subscribe Now</h4>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="section information">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="section helpful-links">
          <h4>Helpful Links</h4>
          <ul>
            <li>FAQ</li>
            <li>Services</li>
            <li>Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="section trending">
          <h4>Trending</h4>
          <ul>
            <li>Fashion</li>
            <li>Technology</li>
            <li>Consumables</li>
            <li>Books</li>
          </ul>
        </div>

        <div className="section address">
          <h4>Address</h4>
          <address>
            Sr. no 52/58 munjoba chowk,<br />
            sainathnagar, vadgaonsheri, Pune.<br />
            Pincode: 411014
          </address>
        </div>

        <div className="section contact">
          <h4>Contact</h4>
          <p>+91 9865875432</p>
          <p>+91 8978451223</p>
          <p>company@gmail.com</p>
          <div className="social-icons">
            <PiInstagramLogo/>
            <TiSocialFacebook/>
            <BsTwitterX/>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>&copy; 2024 company.ltd | All Rights Reserved</p>
        <ul className="footer-links">
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
