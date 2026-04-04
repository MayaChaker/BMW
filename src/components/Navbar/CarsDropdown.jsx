import React from "react";
import { NavLink } from "react-router-dom";
import { CARS_DROPDOWN_LINKS } from "./nav.constants";
import { getNavLinkClassName } from "./nav.utils";

const CarsDropdown = ({
  dropdownRef,
  isOpen,
  isActive,
  onToggle,
  onClose,
  onKeyDown,
}) => {
  const dropdownItemClassName = `nav-item nav-item--dropdown ${
    isOpen ? "open" : ""
  }`;
  const buttonClassName = `nav-link-button ${isActive ? "active" : ""}`;

  return (
    <li className={dropdownItemClassName} ref={dropdownRef}>
      <button
        type="button"
        className={buttonClassName}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={onToggle}
        onKeyDown={onKeyDown}
      >
        Cars
        <svg
          className="nav-caret"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className="nav-dropdown" role="menu">
        {CARS_DROPDOWN_LINKS.map((item) => (
          <li key={item.to} role="none">
            <NavLink
              to={item.to}
              className={getNavLinkClassName}
              onClick={onClose}
              role="menuitem"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CarsDropdown;
