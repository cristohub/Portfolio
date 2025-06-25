import React from "react";
import FooterItem from "./FooterItem";
import { footerLinks } from "../data/footerLinks";

const Footer: React.FC = () => (
  <footer
    className="bg-dark text-white py-4 mt-auto"
    style={{ borderRadius: "34px 34px 0 0" }}
  >
    <div className="container">
      <div className="row">
        {footerLinks.map((group, index) => (
          <FooterItem key={index} {...group} />
        ))}
      </div>
      <hr className="border-light mt-4" />
      <p className="text-center mb-0">
        {"\u00A9"} {new Date().getFullYear()} Cristofer Sani. Todos los derechos
        reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
