import React from "react";
import "./App.css";
import nik from "./Assets/nik.jpg"

export default function LinkhubApp() {
  return (
    <div className="hero">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={nik}
            alt="Nikhil Kumar Rana"
            className="avatar"
          />
          <h2>Nikhil Kumar Rana</h2>
          <p>Java Backend Developer | AI Enthusiast</p>
        </div>

        <div className="profile-links">
          <a href="https://nikhilrana07.vercel.app/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe"></i> Portfolio
          </a>
          <a href="https://github.com/beingnikil07" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>

            <a href="https://leetcode.com/beingnikil07" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-code"></i> LeetCode
          </a>

          <a href="https://www.linkedin.com/in/nikilkumar07/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
              <a href="https://instagram.com/being_nikhil07" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
           <a href="https://wa.me/qr/CT7ALNUJWKDHA1" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>

          <a href="mailto:kumarnikil220@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>

        </div>

        <div className="profile-footer">
          <p><strong>📞</strong> +91 6395964648</p>
          <p><strong>📍</strong> Greater Noida, India</p>
        </div>
      </div>
    </div>
  );
}
