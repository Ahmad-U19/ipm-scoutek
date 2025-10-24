import React from 'react';
import './About.css';
import { Leaf, MapPin, Calendar, Cpu } from 'lucide-react';

function About() {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>IPM Scoutek</h1>
        <h2>Smart Scouting — Smarter Decisions</h2>
      </div>

      <div className="about-card">
        <p>
          <strong>IPM Scoutek</strong>, founded in <strong>2019</strong> in 
          <strong> Leamington, Ontario, Canada</strong>, is a leading 
          <strong> agricultural software company</strong> transforming how 
          greenhouse growers monitor pests and diseases. Our goal is to bring 
          precision, efficiency, and digital intelligence to Integrated Pest Management (IPM).
        </p>

        <p>
          By digitizing traditional scouting methods, IPM Scoutek helps growers 
          and agronomists track pest activity, visualize trends, and make timely 
          decisions through powerful data insights. We focus on innovation, 
          usability, and supporting the global shift toward sustainable agriculture.
        </p>

        <p>
          Unlike pest control companies, IPM Scoutek provides 
          <strong> software tools and analytics</strong> that empower 
          greenhouse teams to make informed, eco-friendly management decisions. 
          Our technology helps optimize crop health and reduce pesticide dependency.
        </p>

        <div className="about-info">
          <div className="info-item">
            <Calendar className="info-icon" />
            <p><strong>Founded:</strong> 2019</p>
          </div>
          <div className="info-item">
            <MapPin className="info-icon" />
            <p><strong>Headquarters:</strong> Leamington, Ontario, Canada</p>
          </div>
          <div className="info-item">
            <Cpu className="info-icon" />
            <p><strong>Industry:</strong> AgTech / Software Development</p>
          </div>
          <div className="info-item">
            <Leaf className="info-icon" />
            <p><strong>Focus:</strong> Integrated Pest Management (IPM) Software</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
