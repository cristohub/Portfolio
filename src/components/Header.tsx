import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { navLinks } from "../data/navLinks";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <header className="z-3">
        {" "}
        <nav className="navbar navbar-expand-lg px-4 custom-navbar">
          <a className="golden-badge navbar-brand fw-bold fs-4 text-white d-flex align-items-center px-3 py-2">
            <img src="/Logo.png" alt="Logo" style={{ height: "40px" }} />
          </a>

          <style>{`
            .golden-badge {
              
              border-radius: 10px;
            
              border: 2px solid rgba(255, 255, 255, 0.59);
             
            }

           
          `}</style>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-none d-lg-flex flex-grow-1 justify-content-end">
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

      <style>{`
        body.no-scroll {
          overflow: hidden;
          height: 100vh;
        }

        .custom-navbar {
          background: #004aad;
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          
        }

        .navbar-nav .nav-link {
          color: #fff;
          font-weight: 500;
          transition: color 0.3s ease, border 0.3s ease;
        }

        .navbar-nav .nav-link:hover {
          color: rgb(221, 118, 50);
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
      `}</style>
    </>
  );
};

export default Header;
