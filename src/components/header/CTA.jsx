import React from "react";
// import CV from "../../assets/CV.pdf";

const CTA = () => {
  const CV =
    "https://drive.google.com/file/d/18JOvAezqLnckvYmZ07FDX_ONzna5-olp/view?usp=share_link";
  return (
    <>
      <div className="cta">
        <a href={CV} target="_blank" className="btn" rel="noreferrer">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </>
  );
};

export default CTA;
