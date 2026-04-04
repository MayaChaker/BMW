import React from "react";
import { BMW_SERIES_TABLE } from "../data/bmwCars";
import "../styles/car.css";

const BmwSeriesTable = () => {
  return (
    <main className="container cars-page">
      <header className="cars-header">
        <h1 className="section-title">BMW Series Table</h1>
        <p className="cars-subtitle">
          A quick overview of BMW series generations, pricing, and power ranges.
        </p>
      </header>

      <section className="series-table-section">
        <div className="series-table-wrapper">
          <table className="series-table">
            <thead>
              <tr>
                <th>Series</th>
                <th>Release Date</th>
                <th>Latest Model Date</th>
                <th>Average Price</th>
                <th>Horsepower</th>
              </tr>
            </thead>
            <tbody>
              {BMW_SERIES_TABLE.map((row) => (
                <tr key={row.series}>
                  <td>{row.series}</td>
                  <td>{row.releaseDate}</td>
                  <td>{row.latestModelDate}</td>
                  <td>{row.averagePrice}</td>
                  <td>{row.horsepower}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default BmwSeriesTable;

