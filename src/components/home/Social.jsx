import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/alexandre.kinkriashvili"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-facebook"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/alexkinkriashvili/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/Kinkro?tab=repositories"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
}

export default Social;
