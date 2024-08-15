import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Company Info</h3>
        <ul>
          <li>About Us</li>
          <li>Latest Posts</li>
          <li>Contact Us</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Help Links</h3>
        <ul>
          <li>Tracking</li>
          <li>Order Status</li>
          <li>Delivery</li>
          <li>Shipping Info</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li>Special Offers</li>
          <li>Gift Cards</li>
          <li>Advertising</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Get in the Know</h3>
        <input type="email" placeholder="Enter email" />
        {/* eslint-disable-next-line react/button-has-type */}
        <button>Subscribe</button>
      </div>
    </footer>
  );
}
