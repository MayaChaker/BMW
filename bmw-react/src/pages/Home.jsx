import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://i.pinimg.com/videos/thumbnails/originals/47/fb/58/47fb580500cf09bdf57ef2aebb697d36.0000000.jpg"
        >
          <source
            src="https://v1.pinimg.com/videos/mc/720p/47/fb/58/47fb580500cf09bdf57ef2aebb697d36.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to BMW</h1>
          <p className="hero-subtitle">The Ultimate Driving Machine</p>
          <Link to="/cars" className="btn">
            Discover Models
          </Link>
        </div>
      </section>

      <section className="about container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Heritage</h2>
            <p>
              BMW, Bayerische Motoren Werke AG, is a world-renowned German
              manufacturer of luxury vehicles and motorcycles. Founded in 1916,
              we have a century-long tradition of engineering excellence,
              innovation, and performance. From our headquarters in Munich, we
              continue to define the future of mobility.
            </p>
          </div>
          <div className="about-image">
            <img src="/background.jpg" alt="BMW M Vehicle" />
          </div>
        </div>
      </section>

      <section className="achievements container">
        <h2 className="section-title">BMW's Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <img src="/img1/download.jpg" alt="BMW i3" />
            <div className="card-content">
              <h3>Innovation</h3>
              <p>
                In 2013, BMW launched the i3, setting new standards for
                sustainable urban mobility with its electric powertrain and
                carbon-fiber body.
              </p>
            </div>
          </div>

          <div className="achievement-card">
            <img src="/img2/download.jpg" alt="Le Mans 1999" />
            <div className="card-content">
              <h3>Motorsport</h3>
              <p>
                Victory at the 24 Hours of Le Mans in 1999 solidified our
                reputation for high-performance engineering and endurance.
              </p>
            </div>
          </div>

          <div className="achievement-card">
            <img src="/img3/download.jpg" alt="Achievement 3" />
            <div className="card-content">
              <h3>Sustainability</h3>
              <p>
                BMW is committed to sustainability. In 2010, our Leipzig plant
                became the first auto factory to use exclusively green power,
                underscoring our dedication to reducing environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="legacy container">
        <h2 className="section-title">A Legacy of Innovation</h2>

        <div className="legacy-grid">
          <div className="legacy-item">
            <h3>Founders</h3>
            <p>
              Founded in 1916 by visionaries Karl Rapp, Gustav Otto, and Franz
              Josef Popp, BMW began with a shared passion for aviation,
              manufacturing aircraft engines that would set the standard for
              engineering excellence.
            </p>
          </div>

          <div className="legacy-item">
            <h3>Key Figures</h3>
            <ul className="legacy-list">
              <li>
                <strong>Max Friz:</strong> Designer of the first BMW aircraft
                engine and the iconic "Boxer" motorcycle engine.
              </li>
              <li>
                <strong>Eberhard von Kuenheim:</strong> CEO (1970-1993) who
                modernized BMW and expanded its global presence.
              </li>
              <li>
                <strong>Paul Rosche:</strong> "Father of the M Power Engine,"
                instrumental in developing high-performance engines.
              </li>
            </ul>
          </div>

          <div className="legacy-item">
            <h3>Journey to Excellence</h3>
            <ul className="legacy-list">
              <li>
                <strong>1930s:</strong> Transitioned to automobiles with the
                iconic BMW 328.
              </li>
              <li>
                <strong>1960s:</strong> "New Class" sedans birthed the "Ultimate
                Driving Machine".
              </li>
              <li>
                <strong>Motorsport:</strong> Victories at Le Mans and Formula 1.
              </li>
              <li>
                <strong>Future:</strong> Pioneering sustainable mobility with
                the i Series.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
