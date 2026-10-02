import React from "react";

interface NavItemProps {
  label: string;
  href: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    if (onClick) onClick();
  };

  return (
    <li className="nav-item">
      <a className="nav-link" href={href} onClick={handleClick}>
        {label}
      </a>
    </li>
  );
};

export default NavItem;
