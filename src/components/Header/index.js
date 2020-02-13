import React, { Component } from "react";

import { Container } from "./styles";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <div className="profile">
          <img
            src="https://avatars3.githubusercontent.com/u/3890516?v=4"
            alt="Carlos Stenzel"
          />
        </div>
        <div className="details">
          <h2>Carlos Stenzel</h2>
          <h3>Full Stack Developer</h3>
          <p>
            Passionate about Javascript, ReactJS, React Native, NodeJS and the
            whole ecosystem around these technologies..
          </p>
        </div>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://github.com/carlosstenzel"
                title="GitHub"
                target="_bank"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/carlosstenzel/"
                title="Linkedin"
                target="_bank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/carlosstenzel/"
                title="Instagram"
                target="_bank"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}
