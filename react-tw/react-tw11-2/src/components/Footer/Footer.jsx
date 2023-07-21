import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div>
      <footer className="horizontal">
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="#">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="#">
            <i className="fab fa-instagram fa-2x" />
          </a>
          <a href="#">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
        <div className="copyright">© Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Footer;
