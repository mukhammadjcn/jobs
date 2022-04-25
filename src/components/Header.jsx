import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import logo from "../assets/images/logo.png";
import Login from "./Shared/Login";
import { Popover } from "antd";

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
  // Modal state
  const [modal, setModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const [popover, setPopover] = useState(false);

  const logout = () => {
    setPopover(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload(false);
  };
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

          {user && user !== null ? (
            <Popover
              content={<a onClick={() => logout()}>Log out</a>}
              title=""
              trigger="click"
              visible={popover}
              placement="bottomRight"
              onVisibleChange={() => setPopover(true)}
            >
              <button className="btn">{user?.name}</button>
            </Popover>
          ) : (
            <button className="btn" onClick={() => setModal(true)}>
              Login
            </button>
          )}
        </nav>

        {/* Login Modal */}
        <Login modal={modal} setModal={setModal} />
      </div>
    </div>
  );
}

export default Header;
