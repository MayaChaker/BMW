import React from "react";
import HighlightCard from "./HighlightCard";

const HighlightsSection = ({ styles }) => {
  const highlightItems = [
    {
      title: "Performance",
      description:
        "Confident handling, quick response, and comfort you can feel every day.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2L4 14H11L10 22L20 9H13L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Craftsmanship",
      description:
        "Premium materials and precise details designed to stay timeless.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9.5 9.5L11.2 11.2L14.8 7.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Technology",
      description:
        "Smart assistance and seamless connectivity that elevates each trip.",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 7H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12H14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 17H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 10V14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className={`${styles.highlights} container`}
      role="region"
      aria-labelledby="home-highlights-title"
    >
      <h2 id="home-highlights-title" className="section-title">
        Highlights
      </h2>
      <div
        className={styles.highlightsGrid}
        role="list"
        aria-label="BMW highlights"
      >
        {highlightItems.map((item) => (
          <HighlightCard
            key={item.title}
            styles={styles}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
