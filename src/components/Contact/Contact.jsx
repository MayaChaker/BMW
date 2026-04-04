import React from "react";
import { useLocation } from "react-router-dom";
import { BMW_CARS } from "../../data/bmwCars";
import { useContactForm } from "../../hooks/useContactForm";
import { buildModelOptions } from "../../utils/car.utils";
import ContactForm from "./ContactForm";

const MODEL_OPTIONS = buildModelOptions(BMW_CARS);

const Contact = () => {
  const location = useLocation();

  const { formData, isSubmitted, isSubmitting, handleChange, handleSubmit } =
    useContactForm({
      search: location.search,
      modelOptions: MODEL_OPTIONS,
    });

  return (
    <main className="container contact-page">
      <header className="contact-hero">
        <h1 className="contact-title">CONTACT US</h1>
        <p className="contact-subtitle">
          Share your preferences and a BMW concierge will follow up with next
          steps.
        </p>
      </header>

      <section className="contact-layout">
        <div className="contact-card">
          <h2 className="contact-card-title">Contact Us</h2>
          <ContactForm
            formData={formData}
            modelOptions={MODEL_OPTIONS}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;

