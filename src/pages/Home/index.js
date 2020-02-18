import React, { Component } from "react";

import Education from "../../components/Education";
import Courses from "../../components/Courses";
import Skill from "../../components/Skill";
import Portfolio from "../../components/Portfolio";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitSquare
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
            <Skill name="Node.JS" icon={<FaNodeJs />} level="3" />
            <Skill name="JavaScript" icon={<DiJavascript1 />} level="4" />
            <Skill name="FireBase" icon={<DiFirebase />} level="2" />
            <Skill name="React.JS" icon={<FaReact />} level="4" />
            <Skill name="React Native" icon={<FaReact />} level="3" />
            <Skill name="MySQL" icon={<DiMysql />} level="4" />
            <Skill name="PostgreSQL" icon={<DiPostgresql />} level="4" />
            <Skill name="MongoDB" icon={<DiMongodb />} level="3" />
            <Skill name="HTML5" icon={<FaHtml5 />} level="5" />
            <Skill name="CSS3" icon={<FaCss3 />} level="5" />
            <Skill name="Git" icon={<FaGitSquare />} level="4" />
            <Skill name="Linux" icon={<DiLinux />} level="4" />
            <Skill name="PHP" icon={<DiPhp />} level="4" />
          </ul>
        </div>
        <Education />
        <Courses />
        <Portfolio />
      </Container>
    );
  }
}
