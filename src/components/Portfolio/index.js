import React from "react";

import { FaLink } from "react-icons/fa";

import Port_CarlosStenzel from "../../assets/port_carlosstenzel.png";

// import { Container } from './styles';

export default function Portfolio() {
  return (
    <div>
      <h4>Portofolio</h4>
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
      </ul>
    </div>
  );
}
