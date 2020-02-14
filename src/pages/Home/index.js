import React, { Component } from "react";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitSquare,
  FaCircle
} from "react-icons/fa";
import {
  DiFirebase,
  DiJavascript1,
  DiMysql,
  DiPostgresql,
  DiMongodb,
  DiLinux,
  DiPhp
} from "react-icons/di";
import { Container } from "./styles";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <div className="skill">
          <h4>Programming Skill</h4>
          <ul>
            <li>
              <p>
                <FaNodeJs />
                Node.JS
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <DiJavascript1 />
                JavaScript{" "}
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <DiFirebase />
                FireBase
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <FaReact /> React.JS
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <FaReact /> React Native
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <DiMysql />
                MySQL
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <DiPostgresql />
                PostgreSQL
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <DiMongodb />
                MongoDB
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <FaHtml5 />
                HTML5
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <FaCss3 />
                CSS3
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <FaGitSquare /> Git
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <DiLinux /> Linux
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p>
                <DiPhp /> PHP
              </p>
              <div className="level">
                <ul>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li className="active">
                    <FaCircle />
                  </li>
                  <li>
                    <FaCircle />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h4>Education</h4>
          <ul>
            <li>
              <p>
                <span>2019</span> - <strong>GoStack</strong> - Rocketseat
              </p>
            </li>
            <li>
              <p>
                <span>2019</span> -{" "}
                <strong>Administração e Finanças / Neuroaprendizagem</strong> -
                São Braz
              </p>
            </li>
            <li>
              <p>
                <span>2016</span> -{" "}
                <strong>Bacharelado em Sistemas de Informação</strong> -
                Uniguaçu
              </p>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}
