
import React from 'react';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => (
  <li className="nav-item">
    <a className="nav-link" href={href}>
      {label}
    </a>
  </li>
);

export default NavItem;
