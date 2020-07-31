import React, { Component } from "react";

import { Details, Social } from "./styles";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default class Header extends Component {
  render() {
    return (
      <header>
       
        <Details>
          <h1>Carlos Alberto Barbosa Stenzel</h1>
          <h3>Software Engineer</h3>
          
        </Details>
        <Social>
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
        </Social>
      </header>
    );
  }
}
