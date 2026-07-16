import React from "react";

const HighlightCard = ({ styles, number, title, description, ariaLabel }) => {
  return (
    <article
      className={styles.highlightCard}
      role="listitem"
      aria-label={ariaLabel ?? title}
    >
      <span className={styles.highlightNumber}>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.highlightLine} aria-hidden="true" />
    </article>
  );
};

export default HighlightCard;
