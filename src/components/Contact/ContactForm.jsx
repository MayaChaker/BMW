import React from "react";
import ContactFields from "./ContactFields";

const ContactForm = ({
  formData,
  modelOptions,
  isSubmitting,
  isSubmitted,
  onChange,
  onSubmit,
}) => {
  const submitButtonLabel = isSubmitting ? "Submitting..." : "Submit Request";

  const renderSubmittedMessage = () => {
    if (!isSubmitted) return null;
    return (
      <div className="form-alert" role="status">
        Request received. We’ll contact you shortly.
      </div>
    );
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <ContactFields
        formData={formData}
        modelOptions={modelOptions}
        onChange={onChange}
      />

      <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
        <span>{submitButtonLabel}</span>
        <span aria-hidden="true">→</span>
      </button>

      <p className="form-privacy"><span aria-hidden="true">◆</span> Your details remain private and are shared only with your dedicated advisor.</p>

      {renderSubmittedMessage()}
    </form>
  );
};

export default ContactForm;

