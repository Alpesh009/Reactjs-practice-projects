import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + About */}
        <div className="footer-section">
          <h2 className="logo">TodoApp</h2>
          <p>Stay organized and boost your productivity.</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Docs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Subscribe</h3>
          <input type="email" placeholder="Enter email" />
          <button>Subscribe</button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TodoApp | Made by Alpesh Solanki</p>
      </div>
    </footer>
  );
}