import React from "react";
import { Link } from "react-router-dom";
import { data } from "../assets/data/Footer";
import logo from "../assets/images/logo.png";
import "../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src={logo} alt="" />
          <h2>Call us </h2>
          <a href="tel:+998916763787" className="footer__logo-tel">
            +998 91 676 37 87
          </a>
          <p>328 Queensberry Street, North Melbourne VIC</p>
          <a href="mailto:support@superio.com">support@superio.com</a>
        </div>
        <div className="footer__nav">
          {data.map((el) => (
            <div key={el.title} className="footer__nav-item">
              <h4>{el.title}</h4>
              <div className="footer__nav-links">
                {el.list.map((child) => (
                  <Link to={child.path} key={child.title}>
                    <i></i>
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
