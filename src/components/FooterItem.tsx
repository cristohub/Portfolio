import React from 'react';

interface Props {
  title: string;
  links: { name: string; url: string }[];
}

const FooterItem: React.FC<Props> = ({ title, links }) => (
  <div className="col-6 col-md-4">
    <h5>{title}</h5>
    <ul className="list-unstyled">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.url} className="text-white text-decoration-none">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterItem;
