import React, { useEffect, useState, useRef } from "react";
import NavItem from "./NavItem";
import { navLinks } from "../data/navLinks";

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setShowHeader(currentY < lastScrollY.current || currentY < 10);
          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll al abrir menú
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`position-fixed top-0 start-0 end-0 z-3 ${
          showHeader ? "show-header" : "hide-header"
        }`}
        style={{ transition: "transform 0.4s ease" }}
      >
        <nav className="navbar navbar-expand-lg px-4 custom-navbar">
          <a className="navbar-brand fw-bold fs-4 text-white" href="#inicio">
            Cristofer Sani
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú escritorio centrado */}
          <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <NavItem key={link.href} {...link} />
              ))}
            </ul>
          </div>
        </nav>

        {/* Sidebar móvil/tablet */}
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

      {/* Aquí se elimina el overlay */}

      <style>{`
        body.no-scroll {
          overflow: hidden;
          height: 100vh;
        }

        .custom-navbar {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-nav .nav-link {
          color: #fff;
          font-weight: 500;
          transition: color 0.3s ease, border 0.3s ease;
        }

        .navbar-nav .nav-link:hover {
          color: #0dcaf0;
        }

        .hide-header {
          transform: translateY(-100%);
        }

        .show-header {
          transform: translateY(0);
        }

        .sidebar-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 250px;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.95);
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
          font-size: 2rem;
          position: absolute;
          top: 10px;
          right: 20px;
          cursor: pointer;
        }

    

        @media (min-width: 992px) {
          .sidebar-menu {
            display: none;
          }
          /*
          .overlay {
            display: none;
          }
          */
        }
      `}</style>
    </>
  );
};

export default Header;
