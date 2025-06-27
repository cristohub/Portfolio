import React from "react";
import FooterItem from "./FooterItem";
import { footerLinks } from "../data/footerLinks";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    const target = document.getElementById("inicio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="text-center">
          <h2>Cristofer Sani</h2>
          <p>Desarrollador Web</p>
          <div onClick={scrollToTop} style={{ cursor: "pointer" }}>
            <img src="/Logo.png" alt="Logo" style={{ height: "200px" }} />
          </div>
        </div>
        <div className="row">
          {footerLinks.map((group, index) => (
            <FooterItem key={index} {...group} />
          ))}
        </div>
        <hr className="border-light mt-4" />
        <p className="text-center mb-0">
          {"\u00A9"} {new Date().getFullYear()} Cristofer Sani. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
