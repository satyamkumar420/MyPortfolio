import React, { useRef } from "react";
import "./contact.css";
import { IoMdMailOpen, IoLogoWhatsapp } from "react-icons/io";
import { ImTelegram } from "react-icons/im";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_axwo9o8",
      "template_fs5996d",
      form.current,
      "CqZYxRbSZd8A5jIhg"
    );
    toast.success("Message Successfully Send", {
      position: "top-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      style: {
        color: "#09ff10",
        background: "#1a2138",
        borderRadius: "12px",
        fontSize: "18px",
      },
    });
    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <IoMdMailOpen className="contact_icon" />
              <h4>Email</h4>
              <h5 className="contact_detail contact_email">
                satyamkumar2460@gmail.com
              </h5>
              <a
                href="mailto:satyamkumar2460@gmail.com"
                rel="noreferrer noopener"
                target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <ImTelegram className="contact_icon" />
              <h4>Telegram</h4>
              <h5 className="contact_detail">@satyadeveloper</h5>
              <a
                href="https://telegram.me/satyadeveloper"
                rel="noreferrer noopener"
                target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <IoLogoWhatsapp className="contact_icon" />
              <h4>WhatsApp</h4>
              <h5 className="contact_detail">+919693756696</h5>
              <a
                href="https://wa.me/9693756696"
                rel="noreferrer noopener"
                target="_blank">
                Send a message
              </a>
            </article>
          </div>

          {/* ====== Contact Form */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              autoComplete="email"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Your Message"
              required></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Contact;
