import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BMW_SERIES_TABLE } from "../data/bmwCars";
import "../styles/series-table.css";

const FILTERS = ["All", "Core", "X", "i", "M"];
const cleanRange = (value) => value.replace("â€“", "–");

const matchesFilter = (series, filter) => {
  if (filter === "All") return true;
  if (filter === "Core") return /^[1357]/.test(series);
  return series.startsWith(filter);
};

const BmwSeriesTable = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleSeries = useMemo(
    () => BMW_SERIES_TABLE.filter((row) => matchesFilter(row.series, activeFilter)),
    [activeFilter],
  );

  return (
    <main className="series-page">
      <header className="series-hero container">
        <div className="series-hero-copy">
          <p className="series-kicker">The BMW range · At a glance</p>
          <h1>Every series.<br /><em>One clear view.</em></h1>
          <p>Compare heritage, indicative pricing and performance across the BMW family—from iconic sporting saloons to electric mobility.</p>
        </div>
        <dl className="series-overview">
          <div><dt>Families</dt><dd>{BMW_SERIES_TABLE.length.toString().padStart(2, "0")}</dd></div>
          <div><dt>Legacy since</dt><dd>1972</dd></div>
          <div><dt>Peak output</dt><dd>738 <small>HP</small></dd></div>
        </dl>
      </header>

      <section className="series-comparison container" aria-labelledby="comparison-title">
        <div className="series-toolbar">
          <div>
            <span>01</span>
            <h2 id="comparison-title">Series comparison</h2>
          </div>
          <div className="series-filters" aria-label="Filter BMW series">
            {FILTERS.map((filter) => (
              <button key={filter} type="button" className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>
                {filter === "Core" ? "Core Series" : `${filter}${filter === "All" ? "" : " Series"}`}
              </button>
            ))}
          </div>
        </div>

        <div className="series-table-shell">
          <table className="premium-series-table">
            <caption className="sr-only">BMW series release dates, pricing and horsepower comparison</caption>
            <thead>
              <tr>
                <th scope="col">Series</th>
                <th scope="col">Introduced</th>
                <th scope="col">Latest model</th>
                <th scope="col">Indicative price</th>
                <th scope="col">Power range</th>
              </tr>
            </thead>
            <tbody>
              {visibleSeries.map((row, index) => (
                <tr key={row.series}>
                  <th scope="row" data-label="Series"><span>{String(index + 1).padStart(2, "0")}</span><strong>{row.series}</strong></th>
                  <td data-label="Introduced">{row.releaseDate}</td>
                  <td data-label="Latest model">{row.latestModelDate}</td>
                  <td data-label="Indicative price"><strong>{row.averagePrice}</strong></td>
                  <td data-label="Power range"><span className="power-value">{cleanRange(row.horsepower)}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className="series-table-note">
            <p>Pricing and specifications are indicative and may vary by market, trim and model year.</p>
            <Link to="/cars">Explore all models <span aria-hidden="true">→</span></Link>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default BmwSeriesTable;

