import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image:
      "https://user-images.githubusercontent.com/98641231/199112834-f0f81c99-d84a-4221-abce-560e7c493b71.png",
    title: "Music Pro",
    github: "https://github.com/satyamkumar420/",
    demo: "https://musicpro2023.netlify.app/",
  },
  {
    id: 2,
    image:
      "https://user-images.githubusercontent.com/98641231/193781055-73c5de2f-c6c5-4515-9ed6-6d50ed5dc1b3.png",
    title: "YouTube2.0",
    github: "https://github.com/satyamkumar420/YouTube2.0",
    demo: "https://youtube2023.netlify.app/",
  },
  {
    id: 3,
    image:
      "https://user-images.githubusercontent.com/98641231/194766008-df37be8e-f891-4233-b1b7-97805ca84c34.png",
    title: "HooBank Design",
    github: "https://github.com/satyamkumar420/HooBank",
    demo: "https://hoobank2023.netlify.app/",
  },
  {
    id: 4,
    image:
      "https://user-images.githubusercontent.com/98641231/198887425-2ad589dd-cc8f-44cc-8081-e033553124bd.gif",
    title: "TODO LIST",
    github: "https://github.com/satyamkumar420/TodoList",
    demo: "https://satyamkumar420.github.io/TodoList/",
  },
  {
    id: 5,
    image:
      "https://user-images.githubusercontent.com/98641231/199101186-80ef8838-3bd5-4327-af80-25fa0d130933.png",
    title: "Weather App",
    github: "https://github.com/satyamkumar420/React-Weather-App",
    demo: "https://satyamkumar420.github.io/React-Weather-App/",
  },
  {
    id: 6,
    image:
      "https://user-images.githubusercontent.com/98641231/190583722-d146ff26-55df-4e7d-b153-5ccda1409278.png",
    title: "Tic Tac Toe",
    github: "https://github.com/satyamkumar420/React-Tic-Tac-Toe",
    demo: "https://satyamkumar420.github.io/React-Tic-Tac-Toe/",
  },
  {
    id: 7,
    image:
      "https://user-images.githubusercontent.com/98641231/182555499-eccf176c-23ee-4f66-a30e-dbe71a534fa1.png",
    title: "Normal Portfolio",
    github: "https://github.com/satyamkumar420/ReactPortfolio2",
    demo: "https://satyamkumar420.github.io/ReactPortfolio2/",
  },
  {
    id: 8,
    image:
      "https://user-images.githubusercontent.com/98641231/199103812-8889e169-db88-4796-9dff-c75a73d4fc65.png",
    title: "HTML, CSS & JS Portfolio",
    github: "https://github.com/satyamkumar420/Portfolio",
    demo: "https://satyamkumar420.github.io/Portfolio/",
  },
  {
    id: 9,
    image:
      "https://user-images.githubusercontent.com/98641231/183815972-b8fa9c02-208a-4190-ab32-2e788a3389ea.png",
    title: "React Based Calculator",
    github: "https://github.com/satyamkumar420/Calculator",
    demo: "https://satyamkumar420.github.io/Calculator/",
  },
  {
    id: 10,
    image:
      "https://user-images.githubusercontent.com/98641231/199105465-52b49658-73e7-4f12-8d43-b6b0c9b2af4d.png",
    title: "Analog Clock",
    github: "https://github.com/satyamkumar420/Analog-Clock",
    demo: "https://satyamkumar420.github.io/Analog-Clock/",
  },
  {
    id: 11,
    image:
      "https://user-images.githubusercontent.com/98641231/199106540-09763847-06b4-418f-bf9c-cada2d3568f4.png",
    title: "Github Search",
    github: "https://github.com/satyamkumar420/Search-Github-User",
    demo: "https://satyamkumar420.github.io/Search-Github-User/",
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3 className="portfolio_title">{title}</h3>
                <div className="portfolio_item_cta">
                  <a
                    href={github}
                    className="btn"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
