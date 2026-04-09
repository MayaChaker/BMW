import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BMW_CARS, BMW_CAR_TYPES } from "../data/bmwCars";
import { toWebpSrc } from "../utils/car.utils";
import "../styles/car.css";

const Cars = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredCars = useMemo(() => {
    if (selectedType === "All") return BMW_CARS;
    return BMW_CARS.filter((car) => car.type === selectedType);
  }, [selectedType]);

  return (
    <main className="container cars-page">
      <header className="cars-header">
        <h1 className="section-title">All Types</h1>
        <p className="cars-subtitle">
          Explore the full range—SUVs, sedans, coupes, convertibles, EVs, and M
          performance models.
        </p>
      </header>

      <div className="cars-filters" role="tablist" aria-label="Filter by type">
        <button
          type="button"
          className={`cars-filter-button ${
            selectedType === "All" ? "active" : ""
          }`}
          onClick={() => setSelectedType("All")}
        >
          All
        </button>
        {BMW_CAR_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            className={`cars-filter-button ${
              selectedType === type ? "active" : ""
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="car-grid">
        {filteredCars.map((car, index) => (
          <Link
            key={car.id}
            to={`/cars/${car.id}`}
            className="car-card car-card-link"
          >
            <div className="car-image">
              <picture>
                {toWebpSrc(car.imageSrc) !== car.imageSrc ? (
                  <source srcSet={toWebpSrc(car.imageSrc)} type="image/webp" />
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
    </main>
  );
};

export default Cars;
