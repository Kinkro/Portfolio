import { REPO_DATA } from "./RepoData";
import "./Portfolio.css";
import React from "react";
import { useState } from "react";

function Portfolio() {
  const [num, setNum] = useState(6);

  const projectsToShow = REPO_DATA.slice(0, num);

  return (
    <section>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My projects</span>

      <div>
        <div className="project__container">
          {projectsToShow.map((repo) => {
            return (
              <div className="portfolio__item" id="portfolio" key={repo.id}>
                <h1 className="project__title">{repo.title}</h1>
                <img
                  className="project__img"
                  src={repo.image}
                  alt={repo.title}
                />
                <p className="project__description">{repo.description}</p>
                <a
                  className="project__link"
                  href={repo.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                  <i className="uil uil-arrow-right project__link-icon"></i>
                </a>
              </div>
            );
          })}
        </div>
        <div className="button__container">
          <button
            className="button button__flex"
            onClick={() => {
              setNum(num + 2);
              if (num >= REPO_DATA.length) {
                setNum(6);
              }
            }}
          >
            {num < REPO_DATA.length ? "See More" : "See Less"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
