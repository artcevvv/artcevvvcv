import React from "react";
import { IoCalendar } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import ButtonWithIcon from "../ui/ButtonWithIcon";
import { FaTelegram } from "react-icons/fa6";

function SectionTwo() {
  return (
    <div className="sectiontwo__container">
      <div className="sectiontwo__info-container">
        <div className="sectiontwo__info-inner">
          <h3 className="sectiontwo__heading">Education</h3>
          <div className="sectiontwo__text">
            <p>
              <span>Astant IT University</span> — Big Data Analysis
            </p>
            <div className="text__datetime">
              <IoCalendar />
              <code>Sep 2024 - 2027</code>
            </div>
          </div>
        </div>
        <div className="sectiontwo__border"></div>
      </div>
      <div className="sectiontwo__info-container">
        <div className="sectiontwo__info-inner">
          <h3 className="sectiontwo__heading">Experience</h3>
          <div className="sectiontwo__text">
            <div className="role__skills">
              <p>
                <span>SunITy.kz</span> — Full-Stack Developer
              </p>
              <div className="skills">
                <p className="skill">Wordpress</p>
                <p className="skill">HTML</p>
                <p className="skill">JS</p>
                <p className="skill">AJAX</p>
                <p className="skill">React</p>
                <p className="skill">PHP</p>
                <p className="skill">Python</p>
                <p className="skill">Go</p>
                <p className="skill">PostgreSQL</p>
                <p className="skill">MySQL</p>
              </div>
              <ul className="made">
                <li>
                  Database management (PostgreSQL, MySQL)
                  <ul>
                    <li>Designing databases for specific targets</li>
                    <li>Query optimization</li>
                    <li>Data migration</li>
                    <li>Query writing (SQL)</li>
                  </ul>
                </li>
              </ul>
              <ul className="made">
                <li>
                  Creating optimized solutions using Wordpress and Woocommerce
                  API (PHP, AJAX)
                  <ul>
                    <li>
                      Woocommerce customization (Hooks, filters, HTML, CSS, JS)
                    </li>
                    <li>API interaction (Utilizing Woocommerce REST API)</li>
                    <li>WooCommerce Custom Shortcodes (PHP)</li>
                  </ul>
                </li>
              </ul>
              <ul className="made">
                <li>
                  Development of telegram and whatsapp bots (Python, Golang)
                  <ul>
                    <li>
                      Designing easily-scalable architecture (aiogram (Python)
                      and telego (Golang))
                    </li>
                    <li>Connecting with databases (MongoDB, PostgreSQL)</li>
                    <li>Handling User states (State machines)</li>
                    <li>Integration with APIs</li>
                    <li>User registration</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="text__datetime">
              <IoCalendar />
              <code>Jan 2024 - present</code>
            </div>
          </div>
        </div>
        <div className="sectiontwo__border"></div>
      </div>
      <div className="sectiontwo__info-container">
        <div className="sectiontwo__info-inner">
          <h3 className="sectiontwo__heading">Individual Projects</h3>
          <div className="sectiontwo__text">
            <div className="role__skills">
              <p>
                <span>Caller Boy</span> — For-Fun University project
              </p>
              <div className="skills">
                <p className="skill">Telegram API</p>
                <p className="skill">Golang</p>
                <p className="skill">Telego</p>
              </div>
              <ul className="made">
                <li>Telegram Group Calling Bot</li>
                <li>
                  Developed a bot using Golang and the Telego library to
                  interact with the Telegram API, automating the process of
                  calling and mentioning users in Telegram groups.
                </li>
                <li>
                  Implemented efficient message handling and user tagging
                  functionalities, ensuring seamless group interactions.
                </li>
                <li>
                  Gained experience with asynchronous programming, API
                  integration, and real-time communication within Telegram
                  ecosystems.
                </li>
              </ul>
              <div className="text__link">
                <ButtonWithIcon
                  icon={<FaGithub />}
                  href={"https://github.com/artcevvv/caller_boy_telegram"}
                  text={"Github"}
                />
                <ButtonWithIcon
                  icon={<FaTelegram />}
                  href={"https://t.me/caller_BDA_bot"}
                  text={"Try it!"}
                />
              </div>
            </div>
            <div></div>
            <div className="role__skills">
              <p>
                <span>Caller Boy</span> — For-Fun University project
              </p>
              <div className="skills">
                <p className="skill">Telegram API</p>
                <p className="skill">Golang</p>
                <p className="skill">Telego</p>
              </div>
              <ul className="made">
                <li>Telegram Group Calling Bot</li>
                <li>
                  Developed a bot using Golang and the Telego library to
                  interact with the Telegram API, automating the process of
                  calling and mentioning users in Telegram groups.
                </li>
                <li>
                  Implemented efficient message handling and user tagging
                  functionalities, ensuring seamless group interactions.
                </li>
                <li>
                  Gained experience with asynchronous programming, API
                  integration, and real-time communication within Telegram
                  ecosystems.
                </li>
              </ul>
              <div className="text__link">
                <ButtonWithIcon
                  icon={<FaGithub />}
                  href={"https://github.com/artcevvv/caller_boy_telegram"}
                  text={"Github"}
                />
                <ButtonWithIcon
                  icon={<FaTelegram />}
                  href={"https://t.me/caller_BDA_bot"}
                  text={"Try it!"}
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="sectiontwo__border"></div>
      </div>
    </div>
  );
}

export default SectionTwo;
