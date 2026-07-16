import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ styles }) => {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const posterSrc =
    import.meta.env.VITE_HERO_POSTER_URL ??
    "/assets/showcase/m8-premium.webp";
  const videoSrc =
    import.meta.env.VITE_HERO_VIDEO_URL ?? "/assets/media/hero.mp4";

  return (
    <section
      className={`${styles.hero} ${videoReady ? styles.videoReady : ""}`}
      role="region"
      aria-labelledby="home-hero-title"
    >
      {!videoFailed ? (
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>The art of forward motion</p>
        <h1 id="home-hero-title">
          Designed to <span>move you.</span>
        </h1>
        <p className={styles.heroDescription}>
          Discover a curated world of performance, precision, and progressive
          luxury—built around the way you drive.
        </p>
        <div className={styles.heroActions}>
          <Link to="/cars" className="btn">
            Explore the collection
          </Link>
          <Link to="/contact" className={styles.heroTextLink}>
            Book a consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <dl className={styles.heroMetrics} aria-label="BMW highlights">
          <div>
            <dt>100+</dt>
            <dd>Years of innovation</dd>
          </div>
          <div>
            <dt>20</dt>
            <dd>Curated models</dd>
          </div>
          <div>
            <dt>24/7</dt>
            <dd>Digital concierge</dd>
          </div>
        </dl>
      </div>
      <a className={styles.scrollCue} href="#model-spotlight">
        <span>Scroll to explore</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
};

export default HeroSection;
