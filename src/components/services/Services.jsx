import React from "react";
import "./services.css";
import { BiCheckDouble } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
          {/* UI/UX Design */}
          <article className="service">
            <div className="service_head">
              <h3>UI/UX Design </h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Homepage introducing yourself.</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Employee/Clients Section</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>About page.</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Contact page.</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Simple navigation.</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Social Media Links</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>User friendly</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Flexibility and efficiency of use.</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Aesthetic and minimalist design.</p>
              </li>
            </ul>
          </article>
          {/* Web Development */}
          <article className="service">
            <div className="service_head">
              <h3>Web Development</h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Full-Stack Web Development Services</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Ecommerce Applications</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Custom Web Applications</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Content Management Systems</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>QA & Testing</p>
              </li>

              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Web Support and Maintenance</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Ticket Booking Applications</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Live Tracking Applications</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Streaming Applications </p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Provide security assurance</p>
              </li>
            </ul>
          </article>
          {/* Content Creation */}
          <article className="service">
            <div className="service_head">
              <h3>Content Creation </h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Document your content strategy.</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Know your audience and put them first.</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Cater to unique user journeys.</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Find value in partnerships.</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Tell stories.</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Get visual.</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Add interaction.</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Measure performance.</p>
              </li>
              <li>
                <BiCheckDouble className="service_list-icon" />
                <p>Do better.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Services;
