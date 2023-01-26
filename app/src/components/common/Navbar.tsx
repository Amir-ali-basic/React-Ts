import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import SearchIcon from "../../assets/icons/IconSearch.svg";

interface ILink {
  url: string;
  name: string;
}
interface Props {
  links: ILink[];
}

const NavBar: React.FC<Props> = ({ links }) => {
  return (
    <>
      <nav className="d-flex justify-content-center container-fluid">
        <div className="nav nav-container d-flex justify-content-space-between align-center container">
          <div className="nav-logo d-flex w-25 align-center">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-links d-flex align-center w-75 justify-content-space-between">
            <ul className="d-flex gap-56 list-style-none align-center">
              {links.map((link: ILink, index: number) => (
                <li key={index} className="links">
                  <a href={link.url} className="text-decoration-none">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-search d-flex align-center">
              <img
                src={SearchIcon}
                alt="Search Icon"
                className="search-icon ms-2"
              />
              <input
                type="text"
                className="nav-search-input"
                placeholder="Search"
              />
            </div>
            <div className="nav-button">
              <div className="button">Connect</div>
            </div>
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
