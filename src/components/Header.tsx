import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { navLinks } from "../data/navLinks";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <>
      <header className="z-3" id="headerTop">
        <nav className="navbar navbar-expand-lg px-3 px-lg-5 custom-navbar">
          {/* Logo */}
          <a className="golden-badge navbar-brand fw-bold fs-4 text-white d-flex align-items-center px-2 py-2">
            <img src="/Logo.png" alt="Logo" style={{ height: "80px" }} />
          </a>

          {/* Botón menú móvil */}
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú escritorio */}
          <div className="d-none d-lg-flex flex-grow-1 justify-content-end">
            <ul className="navbar-nav align-items-center">
              {navLinks.map((link) => (
                <NavItem key={link.href} {...link} />
              ))}
            </ul>
          </div>
        </nav>

        {/* Sidebar móvil */}
        <div className={`sidebar-menu ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ×
          </button>
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                {...link}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </ul>
        </div>
      </header>

      {/* ESTILOS */}
      <style>{`
        body.no-scroll {
          overflow: hidden;
          height: 100vh;
        }

        .custom-navbar {
          background: #000875ff;
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Ajuste de navbar para que logo y links no estén tan a los extremos */
        .navbar {
          padding-left: 2rem;
          padding-right: 2rem;
        }

        /* NAVBAR LINKS ESPACIADOS */
        .navbar-nav {
          display: flex;
          gap: 1.5rem;
        }

        .navbar-nav .nav-link {
          position: relative;
          color: #fff;
          font-weight: 500;
          font-size: 1.25rem;
          transition: color 0.3s ease;
          letter-spacing: 0.05em;
        }

        .navbar-nav .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background-color: rgba(243, 199, 3, 1);
          transition: width 0.3s ease;
        }

        .navbar-nav .nav-link:hover::after {
          width: 100%;
        }

        /* Sidebar móvil */
        .sidebar-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 250px;
          height: 100vh;
          background-color: rgba(0,0,0,0.95);
          backdrop-filter: blur(8px);
          transition: right 0.4s ease;
          z-index: 2147483647;
          padding: 2rem 1rem;
        }

        .sidebar-menu.open {
          right: 0;
        }

        .sidebar-menu .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 2.5rem;
          position: absolute;
          top: 10px;
          right: 20px;
          cursor: pointer;
        }

        .navbar-toggler {
          border: none;
        }

        .navbar-toggler-icon {
          filter: invert(1);
        }

        @media (min-width: 992px) {
          .sidebar-menu {
            display: none;
          }
        }

        .golden-badge {
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Header;
