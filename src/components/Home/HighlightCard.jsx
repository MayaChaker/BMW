import React from "react";

const HighlightCard = ({ styles, title, description, icon, ariaLabel }) => {
  return (
    <article
      className={styles.highlightCard}
      role="listitem"
      aria-label={ariaLabel ?? title}
    >
      <div className={styles.highlightIcon} aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default HighlightCard;
