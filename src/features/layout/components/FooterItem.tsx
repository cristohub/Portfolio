import React from "react";

interface Props {
  title: string;
  links: { name: string; url: string }[];
}

const FooterItem: React.FC<Props> = ({ title, links }) => (
  <div className="footer__item">
    <h5>{title}</h5>
    <ul className="footer__list">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.url} className="footer__link">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterItem;
