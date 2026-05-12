import React from "react";
import FooterItem from "./FooterItem";
import FooterHero from "./FooterHero";
import { footerLinks } from "../data/footerLinks";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      <FooterHero />
      <div className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            {footerLinks.map((group, index) => (
              <FooterItem key={index} {...group} />
            ))}
          </div>
          <hr className="border-light mt-4" />
          <p className="text-center mb-0">
            {"\u00A9"} {new Date().getFullYear()} Cristofer Sani.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
