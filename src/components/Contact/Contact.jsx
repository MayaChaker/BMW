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
        <p className="contact-kicker">The concierge desk</p>
        <h1 className="contact-title">A private conversation.</h1>
        <p className="contact-subtitle">
          Share your preferences. Your dedicated advisor will curate the right
          model, specification, and next step around you.
        </p>
        <div className="contact-hero-note">
          <span>01</span>
          <p>Confidential consultation<br />No obligation</p>
        </div>
      </header>

      <section className="contact-layout">
        <aside className="contact-aside" aria-label="Concierge service">
          <div className="aside-card">
            <p className="aside-eyebrow">Private client service</p>
            <h2 className="aside-title">Your next drive, personally curated.</h2>
            <p className="aside-text">
              Tell us what matters most—from performance and comfort to colour
              and timing. We will shape a shortlist around you.
            </p>
            <dl className="aside-details">
              <div className="aside-detail"><dt>Response</dt><dd>Within 24 hours</dd></div>
              <div className="aside-detail"><dt>Advisor</dt><dd>Dedicated</dd></div>
              <div className="aside-detail"><dt>Consultation</dt><dd>Complimentary</dd></div>
            </dl>
          </div>
          <div className="trust-grid" aria-label="Service benefits">
            <span className="trust-item">Private</span>
            <span className="trust-item">Personal</span>
            <span className="trust-item">Precise</span>
          </div>
        </aside>
        <div className="contact-card">
          <div className="contact-card-header">
            <div>
              <p className="aside-eyebrow">Start your request</p>
              <h2 className="contact-card-title">Tell us what moves you.</h2>
              <p className="contact-card-intro">A few details are all we need to prepare a conversation shaped around your preferences.</p>
            </div>
            <span className="form-step" aria-label="Step two of two">02</span>
          </div>
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

