import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CarsDropdown from "./CarsDropdown";
import { getNavLinkClassName } from "./nav.utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCarsDropdownOpen, setIsCarsDropdownOpen] = useState(false);

  const carsDropdownRef = useRef(null);

  const location = useLocation();
  const pathname = location.pathname;

  const isCarsRouteActive =
    pathname === "/cars" || pathname.startsWith("/cars/");

  const navListClassName = `nav-list ${isMenuOpen ? "active" : ""}`;
  const menuToggleAriaLabel = isMenuOpen ? "Close menu" : "Open menu";

  const closeMenus = useCallback(() => {
    setIsMenuOpen(false);
    setIsCarsDropdownOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    setIsCarsDropdownOpen(false);
  }, []);

  const toggleCarsDropdown = useCallback(() => {
    setIsCarsDropdownOpen((prev) => !prev);
  }, []);

  const handleCarsButtonKeyDown = useCallback((event) => {
    if (event.key !== "Escape") return;
    setIsCarsDropdownOpen(false);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => closeMenus(), 0);
    return () => window.clearTimeout(timer);
  }, [closeMenus, pathname]);

  useEffect(() => {
    if (!isCarsDropdownOpen) return;

    const handlePointerDown = (event) => {
      if (!carsDropdownRef.current) return;
      if (carsDropdownRef.current.contains(event.target)) return;
      setIsCarsDropdownOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isCarsDropdownOpen]);

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/assets/brand/logo.jpg" alt="BMW Logo" />
        <NavLink
          to="/"
          end
          className="logo-link"
          onClick={closeMenus}
          aria-label="Go to home"
        >
          <span>Luxury Drive Studio</span>
        </NavLink>
      </div>
      <nav>
        <ul className={navListClassName}>
          <CarsDropdown
            dropdownRef={carsDropdownRef}
            isOpen={isCarsDropdownOpen}
            isActive={isCarsRouteActive}
            onToggle={toggleCarsDropdown}
            onClose={closeMenus}
            onKeyDown={handleCarsButtonKeyDown}
          />
          <li className="nav-item nav-item--cta">
            <NavLink
              to="/contact"
              className={getNavLinkClassName}
              onClick={closeMenus}
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className="menu-toggle"
        aria-label={menuToggleAriaLabel}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 7H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12H20"
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
        </svg>
      </button>
    </header>
  );
};

export default Navbar;
