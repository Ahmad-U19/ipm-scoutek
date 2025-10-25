import React, { useEffect } from "react";
import "../Components/Feature.css";
import image1 from "../Data/626x0w.webp"
import image2 from "../Data/2nd.webp"
import image3 from "../Data/scouting.jpg"
import image4 from "../Data/dashboard.jpg"
import image5 from "../Data/heatMaps.jpg"

function Feature() {
  useEffect(() => {
    document.title = "Features | IPM Scoutek";
  }, []);
  return (
    <div>
      <h1 className="heading">Features</h1>

      <div className="cards">
        <div className="feature-card-1">
          <h2>Real-Time Visibility of Pests / Diseases</h2><br />
          <p>IPM Scoutek provides live updates of pest and disease activity across your greenhouse.
            Users can monitor infestation levels and locations as scouts record data.
            This enables quick identification of problem areas and helps in timely decision-making.
            It replaces manual data tracking with automated, map-based insights.</p>
          <img className="img1" src={image1} alt="" />
        </div>

        <div className="feature-card-2">
          <h2>Tracking of Pesticide & Biological Applications</h2><br />
          <p>The platform keeps a complete record of all chemical and biological applications.
            Growers can see what treatments have been applied, where, and when.
            This ensures compliance with regulations and helps evaluate treatment effectiveness.
            It reduces paperwork and improves traceability of pest control actions.</p>
          <img className="img1" src={image2} alt="" />
        </div>

        <div className="feature-card-1">
          <h2>Scout Activity Management</h2><br />
          <p>Scouts use the mobile app to log pest counts, beneficials, and crop conditions directly from the field.
            All data syncs to the cloud, eliminating the need for spreadsheets or paper logs.
            Supervisors can monitor scout activity and validate data in real time.
            This improves workflow efficiency and reporting accuracy.</p>
          <img className="img2" src={image3} alt="" />
        </div>

        <div className="feature-card-2">
          <h2>Dashboard, Trends & Analytics</h2><br />
          <p>The App dashboard visualizes pest population trends over time with easy-to-read charts.
            Growers can compare pest pressure between zones or weeks to spot recurring patterns.
            It helps identify whether pest management actions are working effectively.
            Analytics tools support smarter and data-driven decisions.</p>
          <img className="img2" src={image4} alt="" />
        </div>

        <div className="feature-card-1">
          <h2>Action Thresholds & Heat-Maps</h2><br />
          <p>IPM Scoutek allows users to define pest thresholds for alerts when pressure gets too high.
            Interactive heat maps display infestation intensity across greenhouse zones.
            This visual approach helps prioritize treatment areas quickly.
            It’s a powerful tool for proactive pest management.</p>
          <img className="img1" src={image5} alt="" />
        </div>
      </div>

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

    </div>
  );
}

export default Feature;