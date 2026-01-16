import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    model: "3-series",
    contact: "email",
    location: "",
    color: "Red",
    payment: "Cash",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 1000);
  };

  return (
    <main className="container">
      <section className="offer-section">
        <h1 className="section-title">Limited-Time Offer</h1>
        <div className="offer-content">
          <div className="offer-text">
            <h2>Unleash the Ultimate Driving Experience</h2>
            <p>
              Experience luxury, performance, and innovation like never before
              with BMW's exclusive limited-time offer. For a short time only,
              drive home your dream BMW with unprecedented savings. Enjoy
              reduced prices and attractive financing options on a wide range of
              BMW models.
            </p>
            <p>
              Plus, receive complimentary scheduled maintenance and access to
              our advanced driver assistance features. Don't miss this
              opportunity to elevate your journey.
            </p>
          </div>
          <div className="offer-image">
            <img src="/logo/PngItem_3346098.png" alt="BMW Offer" />
          </div>
        </div>
      </section>

      <section className="models-preview">
        <h2 className="section-title">Featured Models</h2>
        <div className="models-grid">
          <div className="model-preview-card">
            <img src="/BMW 3 Series/images.jpg" alt="BMW 3 Series" />
            <div className="model-info">
              <h3>BMW 3 Series</h3>
              <p>Starting at $41,250</p>
            </div>
          </div>
          <div className="model-preview-card">
            <img src="/BMW X5/images.jpg" alt="BMW X5" />
            <div className="model-info">
              <h3>BMW X5</h3>
              <p>Starting at $59,400</p>
            </div>
          </div>
          <div className="model-preview-card">
            <img src="/BMW 5 Series/download.jpg" alt="BMW 5 Series" />
            <div className="model-info">
              <h3>BMW 5 Series</h3>
              <p>Starting at $54,200</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <h2 className="section-title">Request a Quote</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="model">Select Model</label>
            <select
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
            >
              <option value="3-series">BMW 3 Series</option>
              <option value="5-series">BMW 5 Series</option>
              <option value="7-series">BMW 7 Series</option>
              <option value="x3">BMW X3</option>
              <option value="x5">BMW X5</option>
              <option value="i4">BMW i4</option>
              <option value="m8">BMW M8</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g. Munich, Germany"
              required
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Car Color</label>
            <select name="color" value={formData.color} onChange={handleChange}>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Contact Method</label>
            <div className="radio-group">
              <input
                type="radio"
                id="email"
                name="contact"
                value="email"
                checked={formData.contact === "email"}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>

              <input
                type="radio"
                id="phone"
                name="contact"
                value="phone"
                checked={formData.contact === "phone"}
                onChange={handleChange}
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <div className="radio-group">
              <input
                type="radio"
                id="cash"
                name="payment"
                value="Cash"
                checked={formData.payment === "Cash"}
                onChange={handleChange}
              />
              <label htmlFor="cash">Cash</label>

              <input
                type="radio"
                id="debit"
                name="payment"
                value="Debit"
                checked={formData.payment === "Debit"}
                onChange={handleChange}
              />
              <label htmlFor="debit">Debit</label>
            </div>
          </div>

          <button type="submit" className="btn submit-btn">
            Submit Request
          </button>
          {submitted && (
            <div className="form-alert">
              Thank you for your interest! We will contact you soon.
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default Contact;
