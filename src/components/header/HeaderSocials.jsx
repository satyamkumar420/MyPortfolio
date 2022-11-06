import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <>
      <div className="header_socials ">
        <a
          href="https://www.linkedin.com/in/satyam-kumar-3b71aa205/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <BsLinkedin
            className="linkedin"
            style={{ transition: ".4s", fontSize: "25px" }}
          />
        </a>
        <a
          href="https://github.com/satyamkumar420"
          rel="noreferrer noopener"
          target="_blank"
        >
          <BsGithub
            className="github"
            style={{ transition: ".4s", fontSize: "25px" }}
          />
        </a>
        <a
          href="https://twitter.com/Satyamk404"
          rel="noreferrer noopener"
          target="_blank"
        >
          <BsTwitter
            className="twitter"
            style={{ transition: ".4s", fontSize: "25px" }}
          />
        </a>
      </div>
    </>
  );
};

export default HeaderSocials;
