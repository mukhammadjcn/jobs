import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import logo from "../assets/images/logo.png";

function Header() {
  // Navs
  const nav = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/jobs",
      title: "Find Jobs",
    },
    {
      link: "/employers",
      title: "Employers",
    },
    {
      link: "/candidates",
      title: "Candidates",
    },
    {
      link: "/blog",
      title: "Blog",
    },
  ];

  return (
    <div className="header">
      <div className="container">
        {/* Logo navigates to home page */}
        <Link to="/" className="header__logo">
          <img src={logo} alt="" />
        </Link>

        {/* Nav links */}
        <nav className="header__nav">
          {nav.map((el) => (
            <Link
              to={el.link}
              key={el.title}
              className="header__nav-item overlay"
            >
              {el.title}
            </Link>
          ))}
          <button className="btn">Login</button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
