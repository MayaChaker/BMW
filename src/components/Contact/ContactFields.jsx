import React from "react";
import { COLLECTION_LABEL } from "../../utils/car.utils";

const COLORS = ["Black", "White", "Blue", "Red"];
const PAYMENTS = ["Cash", "Debit"];

const getModelOptionLabel = (car) => {
  const collectionSuffix =
    car.collection && COLLECTION_LABEL[car.collection]
      ? ` — ${COLLECTION_LABEL[car.collection]}`
      : "";
  return `${car.name} (${car.type})${collectionSuffix}`;
};

const ContactFields = ({ formData, modelOptions, onChange }) => {
  const isEmail = formData.contact === "email";

  const renderContactField = () => {
    if (isEmail) {
      return (
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={onChange}
            autoComplete="email"
          />
        </div>
      );
    }

    return (
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="+49 000 0000"
          value={formData.phone}
          onChange={onChange}
          autoComplete="tel"
        />
      </div>
    );
  };

  return (
    <>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={onChange}
            autoComplete="name"
          />
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
            onChange={onChange}
            autoComplete="address-level2"
          />
        </div>

        <div className="form-group">
          <label htmlFor="model">Model</label>
          <select
            id="model"
            name="model"
            value={formData.model}
            onChange={onChange}
          >
            {modelOptions.map((car) => (
              <option key={car.id} value={car.id}>
                {getModelOptionLabel(car)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="color">Color</label>
          <select id="color" name="color" value={formData.color} onChange={onChange}>
            {COLORS.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Preferred Contact</label>
        <div className="pill-group" role="radiogroup">
          <input
            type="radio"
            id="contact-email"
            name="contact"
            value="email"
            checked={isEmail}
            onChange={onChange}
          />
          <label className="pill" htmlFor="contact-email">
            Email
          </label>

          <input
            type="radio"
            id="contact-phone"
            name="contact"
            value="phone"
            checked={!isEmail}
            onChange={onChange}
          />
          <label className="pill" htmlFor="contact-phone">
            Phone
          </label>
        </div>
      </div>

      {renderContactField()}

      <div className="form-group">
        <label>Payment Preference</label>
        <div className="pill-group" role="radiogroup">
          {PAYMENTS.map((payment) => {
            const id = `pay-${payment.toLowerCase()}`;
            return (
              <React.Fragment key={payment}>
                <input
                  type="radio"
                  id={id}
                  name="payment"
                  value={payment}
                  checked={formData.payment === payment}
                  onChange={onChange}
                />
                <label className="pill" htmlFor={id}>
                  {payment}
                </label>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes (optional)</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Budget range, desired timeline, must-have options…"
          value={formData.notes}
          onChange={onChange}
          rows={4}
        />
      </div>
    </>
  );
};

export default ContactFields;

