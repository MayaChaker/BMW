import React from "react";
import { Link } from "react-router-dom";
import { BMW_CARS } from "../data/bmwCars";
import { toWebpSrc } from "../utils/car.utils";
import "../styles/car.css";

const LuxuryCollection = () => {
  const cars = BMW_CARS.filter((car) => car.collection === "luxury-collection");

  return (
    <main className="container cars-page">
      <header className="cars-header">
        <h1 className="section-title">Luxury Collection</h1>
        <p className="cars-subtitle">
          Flagship craftsmanship, premium finishes, and the most exclusive
          models.
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
                <picture>
                  {toWebpSrc(car.imageSrc) !== car.imageSrc ? (
                    <source
                      srcSet={toWebpSrc(car.imageSrc)}
                      type="image/webp"
                    />
                  ) : null}
                  <img
                    src={car.imageSrc}
                    alt={car.imageAlt}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 2 ? "high" : "auto"}
                  />
                </picture>
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

export default LuxuryCollection;
