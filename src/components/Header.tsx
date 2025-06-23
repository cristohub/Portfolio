import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { navLinks } from "../data/navLinks";

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowHeader(currentY <= lastScrollY);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`position-fixed top-0 start-0 end-0 z-3 ${
        showHeader ? "show-header" : "hide-header"
      }`}
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <nav className="navbar navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="#">
          Cristofer Sani
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex={-1}
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
        style={{ zIndex: 2000, height: "100vh" }} // altura completa
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">
            Menú
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav text-end">
            {navLinks.map((link, index) => (
              <NavItem key={index} {...link} />
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .hide-header {
          transform: translateY(-100%);
        }
        .show-header {
          transform: translateY(0);
        }
      `}</style>
    </header>
  );
};

export default Header;
