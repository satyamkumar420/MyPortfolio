import React from "react";
import "./about.css";
import ME from "../../assets/About.png";
import { FaAward, FaUserPlus, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_image">
              <img src={ME} alt="about_me" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>

              <article className="about_card">
                <FaUserPlus className="about_icon" />
                <h5>Clients</h5>
                <small>3+ India</small>
              </article>
              <article className="about_card">
                <FaFolder className="about_icon" />
                <h5>Projects</h5>
                <small>4+ Completed </small>
              </article>
            </div>
            <p>
              As a Full Stack Developer, I enjoy creating web applications. As a
              web developer, I have experience working on numerous projects.
              Technology is my passion, so I'm constantly learning new things
              and improving myself.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
