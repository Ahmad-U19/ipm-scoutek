import React, { useEffect } from "react";
import "./Terms.css";

function Terms() {
  useEffect(() => {
    document.title = "Terms of Use | IPM Scoutek";
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-banner">
        <h1 className="terms-heading">Terms of Use</h1>
      </div>

      <div className="terms-container">
        <p>Last updated: [Date]</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the IPM Scoutek website (“Site”) or services (“Services”), you agree to be bound by these Terms of Use and our Privacy Policy.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
        </p>

        <h2>3. Use of Services</h2>
        <p>
          You agree to use the Services only for lawful purposes and in accordance with all applicable laws and regulations.
        </p>

        <h2>4. Intellectual Property Rights</h2>
        <p>
          All content, features, and functionality of the Services are owned by IPM Scoutek or its licensors.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall IPM Scoutek, its affiliates, or licensors be liable for any indirect, incidental, special or consequential damages.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of [Jurisdiction].
        </p>

        <p>
          <strong>Contact Us:</strong> If you have any questions about these Terms, please contact us at hello@ipmscoutek.com.
        </p>
      </div>
    </div>
  );
}

export default Terms;
