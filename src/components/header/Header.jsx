import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Satya1.png";
import HeaderSocials from "./HeaderSocials";
import { BsFillMouseFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>SATYAM KUMAR</h1>
          <h5 className="text-light">🔥Fullstack Developer🔥</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="Profile" />
          </div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
          <a href="#contact" className="scroll_mouse">
            <BsFillMouseFill />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
