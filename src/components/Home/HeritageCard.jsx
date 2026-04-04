import React from "react";

const HeritageCard = ({ styles, title, children, ariaLabel }) => {
  return (
    <article
      className={styles.heritageCard}
      role="listitem"
      aria-label={ariaLabel ?? title}
    >
      <h3>{title}</h3>
      {children}
    </article>
  );
};

export default HeritageCard;
