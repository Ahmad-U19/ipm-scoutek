import React, { useState, useEffect } from "react";
import "./faq.css";

function Faq() {
    useEffect(() => {
        document.title = "Frequently Asked Questions";
    }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is IPM Scoutek compatible with different types of indoor growing?",
      answer:
        "Flexible for traditional and vertical farming layouts, IPM Scoutek is engineered to adapt to various scouting environments, supporting both stationary and mobile crops across different configurations.",
    },
    {
      question: "Do you offer trials?",
      answer:
        "IPM Scoutek offers a complimentary 30-day trial. Experience IPM Scoutek with a free 30-day trial, complete with extensive training for growers and scouts, and dedicated support throughout the trial period.",
    },
    {
      question: "What is the pricing structure?",
      answer:
        "IPM Scoutek’s licensing is based on the size of your greenhouse, calculated in acres, hectares, square meters, or square feet, and is conveniently billed monthly. Our pricing model allows for flexibility with no long-term lock-in, operating on a month-to-month basis. This structure also includes unlimited user access and complimentary feature upgrades, ensuring your software evolves with your needs without additional costs.",
    },
    {
      question: "How does IPM Scoutek reduce operating costs for my facility?",
      answer:
        "IPM Scoutek significantly reduces costs by up to 30%  in your facility through efficient pest management strategies. By precisely targeting only necessary treatment areas, our system prevents wasteful applications. Real-time data ensures timely treatments, stopping pests before they become a larger issue and reducing the need for more severe interventions. Our platform also supports data-driven decisions by providing insights into pest behavior, allowing proactive management. Additionally, our digital approach eliminates manual record-keeping, as scouts input data directly into tablets, improving both accuracy and efficiency. These streamlined processes not only cut down on direct treatment costs but also minimize labor expenses, enhancing overall operational efficiency.",
    },
    {
      question:
        "How easy is IPM Scoutek to work with and how long does it take to implement it in my facility?",
      answer:
        "IPM Scoutek is widely recognized as the most user-friendly and easiest to use pest management software available today. Implementation is swift and straightforward. We provide comprehensive training for your entire team—including growers, IPM teams, and scouts—which is delivered by our experienced platform specialists in just about 1.5 hours. This ensures that your scouts will be proficient from the very first day of using IPM Scoutek. Additionally, we offer training updates to keep your team informed whenever new features are released, ensuring continuous ease of use and familiarity with the platform’s capabilities. This streamlined approach makes it simple to integrate IPM Scoutek into your facility quickly and effectively.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
