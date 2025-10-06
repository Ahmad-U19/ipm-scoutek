// src/App.js
import React, { useState, useEffect } from "react";
import img from "../src/Data/IPMScoutek-logo.svg";
import picture from "../src/Data/pexels-nc-farm-bureau-mark-2749165.jpg";
import play from "../src/Data/NewPic.webp";
import avail from "../src/Data/available.png";
import app from "../src/Data/available.jpg";
import footerlogo from "../src/Data/IPMScoutek-logo-white-480x97.webp";
import Feature from "../src/Components/Feature";
import "./App.css";

function HomePage({ onNavClick }) {
  return (
    <>
      <div className="main-img">
        <img src={picture} alt="Hero" />
        <div className="main-text">
          <h1>
            Digital Scouting and Integrated Pest Management
            <br /> for Greenhouses
          </h1>
          <button className="demo-btn">Request a Demo</button>
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

      {/* Why IPM */}
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

      {/* How it Works */}
      <div className="how-it-works">
        <h1>How It Works</h1>
        <h3>4 Simple Steps to Smarter Greenhouse IPM</h3>

        <div className="steps">
          <div className="step">
            <h2>1</h2>
            <p>
              <strong>Scout & Record</strong>
              <br />
              Log pests and diseases using the mobile app.
            </p>
          </div>
          <div className="step">
            <h2>2</h2>
            <p>
              <strong>Sync & Analyze</strong>
              <br />
              Data instantly syncs to your dashboard with maps and charts.
            </p>
          </div>
          <div className="step">
            <h2>3</h2>
            <p>
              <strong>Take Action</strong>
              <br />
              Decide treatments based on thresholds and alerts.
            </p>
          </div>
          <div className="step">
            <h2>4</h2>
            <p>
              <strong>Track Results</strong>
              <br />
              Monitor outcomes and generate reports anytime.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Ready to Improve Your Greenhouse IPM?</h2>
        <p>
          Request a demo today and see how IPM Scoutek can transform your crop
          protection.
        </p>
        <button className="cta-btn">Request a Demo</button>
      </div>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState(() => {
    // initial route from hash
    const hash = window.location.hash || "#/";
    return hash.replace(/^#/, "");
  });

  useEffect(() => {
    const onHashChange = () => {
      setRoute((window.location.hash || "#/").replace(/^#/, ""));
      setMenuOpen(false); // close menu on navigation
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (path) => {
    // path example: "/features" or "/"
    if (window.location.hash !== `#${path}`) {
      window.location.hash = path;
    } else {
      // already there — still ensure menu closes
      setMenuOpen(false);
    }
  };

  const onNavClick = () => setMenuOpen(false);

  return (
    <div>
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
          <a href="#/contact" onClick={() => navigate("/contact")}>Contact us</a>
          <button id="quote" onClick={() => { navigate("/contact"); }}>Request Demo</button>
        </div>
      </div>

      {/* Content area: route decides which component/section to show */}
      <main>
        {route === "/features" ? (
          <Feature />
        ) : route === "/about" ? (
          <div className="page about-page">
            <h1>About Us</h1>
            <p>Put your about-us content here.</p>
          </div>
        ) : route === "/pest-library" ? (
          <div className="page pest-library">
            <h1>Pest Library</h1>
            <p>Library content goes here.</p>
          </div>
        ) : route === "/blog" ? (
          <div className="page blog-page">
            <h1>Blog</h1>
            <p>Blog list goes here.</p>
          </div>
        ) : route === "/contact" ? (
          <div className="page contact-page">
            <h1>Contact</h1>
            <p>Contact details or a contact form.</p>
          </div>
        ) : (
          <HomePage onNavClick={onNavClick} />
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
