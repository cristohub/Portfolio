// src/components/Header.tsx
import React from "react";
import NavItem from "./NavItem";
import { navLinks } from "../data/navLinks";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <a className="navbar-brand" href="#">
          Cristofer Sani
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <NavItem key={index} {...link} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
