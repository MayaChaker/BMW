import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { BMW_CARS } from "../data/bmwCars";
import "../styles/car.css";

const CarDetails = () => {
  const { carId } = useParams();

  const car = useMemo(() => {
    return BMW_CARS.find((item) => item.id === carId);
  }, [carId]);

  if (!car) {
    return (
      <main className="container cars-page">
        <header className="cars-header">
          <h1 className="section-title">Car Not Found</h1>
          <p className="cars-subtitle">
            The selected model could not be found.
          </p>
        </header>
        <div className="car-details-actions">
          <Link className="car-details-back" to="/cars">
            Back to Cars
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container cars-page">
      <div className="car-details-actions">
        <Link className="car-details-back" to="/cars">
          Back to Cars
        </Link>
      </div>

      <section className="car-details">
        <div className="car-details-media">
          <img
            src={car.imageSrc}
            alt={car.imageAlt}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="car-details-content">
          <div className="car-meta">
            <span className="car-type">{car.type}</span>
          </div>
          <h1 className="car-details-title">{car.name}</h1>
          <div className="car-details-price">{car.price}</div>
          <ul className="car-details-features">
            {car.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="car-details-cta-row">
            <Link
              className="btn car-details-cta"
              to={`/contact?model=${encodeURIComponent(
                car.id,
              )}&notes=${encodeURIComponent(
                `I want to buy ${car.name}. Please share pricing, availability, and next steps.`,
              )}`}
            >
              Get Buying Info
            </Link>
          </div>
        </div>
      </section>

      <section className="car-buying">
        <h2 className="car-buying-title">How to Buy</h2>
        <div className="car-buying-grid">
          <div className="car-buying-card">
            <h3>1. Contact Us</h3>
            <p>
              Tell us your preferred model, color, and location. We’ll reply
              with pricing guidance and availability.
            </p>
          </div>
          <div className="car-buying-card">
            <h3>2. Choose Payment</h3>
            <p>
              Select cash or debit and share any budget or timeline notes. A
              concierge will tailor options.
            </p>
          </div>
          <div className="car-buying-card">
            <h3>3. Confirm & Schedule</h3>
            <p>
              After confirmation, we coordinate documentation, delivery, and
              pickup timing that suits you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CarDetails;
