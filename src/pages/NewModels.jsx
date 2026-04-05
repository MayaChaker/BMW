import React from "react";
import { Link } from "react-router-dom";
import { BMW_CARS } from "../data/bmwCars";
import "../styles/car.css";

const NewModels = () => {
  const cars = BMW_CARS.filter((car) => car.collection === "new-models");

  return (
    <main className="container cars-page">
      <header className="cars-header">
        <h1 className="section-title">New Models</h1>
        <p className="cars-subtitle">
          Fresh releases and the newest additions across the BMW lineup.
        </p>
      </header>

      <section>
        <div className="car-grid">
          {cars.map((car, index) => (
            <Link
              key={car.id}
              to={`/cars/${car.id}`}
              className="car-card car-card-link"
            >
              <div className="car-image">
                <img
                  src={car.imageSrc}
                  alt={car.imageAlt}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index < 3 ? "high" : "low"}
                />
              </div>
              <div className="car-content">
                <div className="car-meta">
                  <span className="car-type">{car.type}</span>
                </div>
                <h2>{car.name}</h2>
                <h3 className="price">{car.price}</h3>
                <ul className="features-list">
                  {car.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NewModels;
