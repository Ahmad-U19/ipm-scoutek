// src/App.js
import React, { useState, useEffect } from "react";
import img from "../src/Data/IPMScoutek-logo.svg";
import picture from "../src/Data/pexels-nc-farm-bureau-mark-2749165.jpg";
import play from "../src/Data/NewPic.webp";
import avail from "../src/Data/available.png";
import app from "../src/Data/available.jpg";
import footerlogo from "../src/Data/IPMScoutek-logo-white-480x97.webp";
import Feature from "../src/Components/Feature";
import About from "../src/Components/About";
import "./App.css";

function HomePage({ onNavClick, navigate }) {
  return (
    <>
      {/* Hero Section */}
      <div className="main-img">
        <img src={picture} alt="Hero" />
        <div className="main-text">
          <h1>
            Digital Scouting and Integrated Pest Management Software
            <br /> for Greenhouses
          </h1>
          <button
            className="demo-btn"
            onClick={() => navigate("/contact")}
          >
            Request a Demo
          </button>
        </div>
      </div>

      {/* Playstore Section */}
      <div className="playstore">
        <img className="play" src={play} alt="" />
        <div className="store-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.scoutekscoutingapp&hl=en"
            target="_blank"
            rel="noreferrer"
            onClick={onNavClick}
          >
            <img src={avail} alt="Google Play" />
          </a>
          <a
            href="https://apps.apple.com/uz/app/ipm-scoutek/id1507198533"
            target="_blank"
            rel="noreferrer"
            onClick={onNavClick}
          >
            <img src={app} alt="App Store" />
          </a>
        </div>
      </div>

      {/* Why IPM Section */}
      <div className="why-IPM">
        <h1>Why IPM Scoutek</h1>
        <h3>Discover How IPM Scoutek Can Improve Your Crop Protection</h3>
        <div className="text">
          <p>
            IPM Scoutek streamlines greenhouse pest management through innovative
            features like real-time scouting updates, action threshold alerts, and
            data that tracks the pest control from sprays and biological treatments.
          </p>
          <br />
          <p>
            Designed for ease of use and multilingual support, IPM Scoutek makes
            advanced pest management accessible worldwide. Discover how it can
            transform your operations for optimal pest control and crop protection.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Ready to Improve Your Greenhouse IPM?</h2>
        <p>
          Request a demo today and see how IPM Scoutek can transform your crop
          protection.
        </p>
        <button
          className="cta-btn"
          onClick={() => navigate("/contact")}
        >
          Request a Demo
        </button>
      </div>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash || "#/";
    return hash.replace(/^#/, "");
  });

  useEffect(() => {
    const onHashChange = () => {
      setRoute((window.location.hash || "#/").replace(/^#/, ""));
      setMenuOpen(false);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (path) => {
    if (window.location.hash !== `#${path}`) {
      window.location.hash = path;
    } else {
      setMenuOpen(false);
    }
  };

  const onNavClick = () => setMenuOpen(false);

  return (
    <div>
      {/* Navbar */}
      <div id="Navbar">
        <a href="#/" onClick={() => navigate("/")}>
          <img className="logo" src={img} alt="IPM Logo" />
        </a>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navigations ${menuOpen ? "show" : ""}`}>
          <a href="#/" onClick={() => navigate("/")}>Home</a>
          <a href="#/features" onClick={() => navigate("/features")}>Features</a>
          <a href="#/about" onClick={() => navigate("/about")}>About Us</a>
          <a href="#/pest-library" onClick={() => navigate("/pest-library")}>Pest Library</a>
          <a href="#/blog" onClick={() => navigate("/blog")}>Blog</a>
          <button id="quote" onClick={() => navigate("/contact")}>
            Request Demo
          </button>
        </div>
      </div>

      {/* Routing */}
      <main>
        {route === "/features" ? (
          <Feature />
        ) : route === "/about" ? (
          <About />
        ) : route === "/pest-library" ? (
          <div className="page pest-library"><h1>Pest Library</h1></div>
        ) : route === "/blog" ? (
          <div className="page blog-page"><h1>Blog</h1></div>
        ) : route === "/contact" ? (
          <div className="page contact-page"><h1>Contact</h1></div>
        ) : (
          <HomePage onNavClick={onNavClick} navigate={navigate} />
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#/" onClick={() => navigate("/")}>
          <img src={footerlogo} alt="Footer Logo" />
        </a>
        <div className="footer-container">
          <div className="footer-links">
            <div className="footer-column">
              <h3>Contact</h3>
              <p><a href="tel:18664128883">1.866.412.8883</a></p>
              <p><a href="mailto:hello@ipmscoutek.com">hello@ipmscoutek.com</a></p>
              <a
                href="https://www.linkedin.com/company/ipm-scoutek"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon">in</div>
              </a>
            </div>

            <div className="footer-column">
              <h3>Resources</h3>
              <p><a href="#/faq" onClick={() => navigate("/faq")}>FAQ</a></p>
              <p><a href="#/features" onClick={() => navigate("/features")}>Features</a></p>
              <p><a href="#/news" onClick={() => navigate("/news")}>News</a></p>
            </div>

            <div className="footer-column">
              <h3>Information</h3>
              <p><a href="#/about" onClick={() => navigate("/about")}>About Us</a></p>
              <p><a href="#/terms" onClick={() => navigate("/terms")}>Terms of Use</a></p>
              <p><a href="#/privacy" onClick={() => navigate("/privacy")}>Privacy Policy</a></p>
              <p><a href="#/accessibility" onClick={() => navigate("/accessibility")}>Accessibility Statement</a></p>
            </div>
          </div>
        </div>
      </footer>

      <div className="footerPara">
        <p>Copyright © 2025 IPM Scoutek 2730537 Ontario Inc.</p>
      </div>
    </div>
  );
}

export default App;
