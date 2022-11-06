/* eslint-disable jsx-a11y/anchor-is-valid */
/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/

import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer>
        <a href="#" className="footer_logo">
          SATYAM KUMAR
        </a>
        <ul className="permalinks">
          <li className="footer_nav">
            <a href="#">Home</a>
          </li>
          <li className="footer_nav">
            <a href="#about">About</a>
          </li>
          <li className="footer_nav">
            <a href="#experience">Experience</a>
          </li>
          <li className="footer_nav">
            <a href="#services">Services</a>
          </li>
          <li className="footer_nav">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="footer_nav">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="footer_nav">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer_socials">
          <a
            href="https://www.linkedin.com/in/satyam-kumar-3b71aa205/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <BsLinkedin />{" "}
          </a>
          <a
            href="https://github.com/satyamkumar420"
            rel="noreferrer noopener"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/Satyamk404"
            rel="noreferrer noopener"
            target="_blank"
          >
            <BsTwitter />
          </a>
        </div>
        <div className="footer_copyright">
          <small>&copy; SATYAM KUMAR Portfolio. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
