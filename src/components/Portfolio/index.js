import React from "react";

import { FaLink } from "react-icons/fa";

import Port_CarlosStenzel from "../../assets/port_carlosstenzel.png";
import Port_CodeHamper from "../../assets/port_codehamper.png";

// import { Container } from './styles';

export default function Portfolio() {
  return (
    <div>
      <h4>Portfolio</h4>
      <ul className="portfolio">
        <li>
          <img src={Port_CarlosStenzel} alt="Carlos Stenzel" />
          <p>
            <strong>Carlos Stenzel</strong>
            <br />
            <span>WEB</span>

            <a href="https://carlosstenzel.com/" target="_bank">
              <FaLink />
            </a>
          </p>
        </li>
        <li>
          <img src={Port_CodeHamper} alt="CodeHamper" />
          <p>
            <strong>CodeHamper</strong>
            <br />
            <span>WEB</span>

            <a href="https://codehamper.com/" target="_bank">
              <FaLink />
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}
