import React from "react";
import FooterHero from "./FooterHero";
import "./Footer.css";
import {
  footerEmail,
  footerDescription,
  footerOwnerName,
  footerSocialLinks,
} from "../data/footerConfig";
import { footerNavLinks } from "../data/footerNavLinks";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      <FooterHero />
      <div className="footer">
        <div className="footer__inner">
          <a
            className="footer__email"
            href={`mailto:${footerEmail}`}
            aria-label="Enviar correo"
          >
            {footerEmail}
          </a>
          <p className="footer__subtitle">{footerDescription}</p>

          <nav className="footer__nav">
            {footerNavLinks.map((item, index) => (
              <a key={index} href={item.href} className="footer__nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {footerSocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="footer__social-link"
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>

          <p className="footer__copy">
            © {new Date().getFullYear()} {footerOwnerName}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
