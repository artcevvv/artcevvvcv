import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInternetExplorer } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__container-circle_1"></div>
      <div className="hero__container-circle_2"></div>
      <div className="main__hero-section">
        <div className="hero__main-section_1">
          <h1 className="hero__main-title">Artyom Sevostyanov</h1>
          <h2 className="hero__main-subtitle">
            Full-Stack Developer · Back-End Developer
          </h2>
        </div>
      </div>
      <div className="submain__hero-section">
        <div className="hero__main-section_2">
          <div className="section_2-subsection">
            <FaLocationDot className="hero__main-icon" />
            <p className="hero__main-icon_text">Kazakhstan, Astana</p>
          </div>

          <div className="section_2-subsection">
            <IoIosMail className="hero__main-icon" />
            <a
              href="mailto:work.artcevvv@gmail.com"
              className="hero__main-icon_text"
            >
              work.artcevvv@gmail.com
            </a>
          </div>
        </div>
        <div className="hero__main-section_3">
          <a
            href="artcevvv.io"
            className="section_3-subsection section_3-subsection_1"
          >
            <FaInternetExplorer />
            <p className="section__3-text">artcevvv.io</p>
          </a>
          <a
            href="https://www.linkedin.com/in/artcevvv/"
            className="section_3-subsection section_3-subsection_2"
          >
            <FaLinkedin />
            <p className="section__3-text">/artcevvv</p>
          </a>
          <a
            href="https://github.com/artcevvv"
            className="section_3-subsection section_3-subsection_3"
          >
            <FaGithub />
            <p className="section__3-text">/artcevvv</p>
          </a>
          <a href="https://t.me/evildild0" className="section_3-subsection section_3-subsection_4">
            <FaTelegram />
            <p className="section__3-text">/evildild0</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
