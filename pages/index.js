import Head from 'next/head';
import { Header, Details, Social, Emblemas } from '../styles/home';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSalesforce
} from 'react-icons/fa';

function HomePage() {
  return (
    <>
      <Header>
        <Head>
          <title>Carlos Stenzel - Salesforce Developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Details>
          <div className="perfil">
            <img src="/me.jpg" alt="Carlos Stenzel" />
          </div>
          <div className="detalhes">
            <h1>Carlos Stenzel</h1>
            <h3>Salesforce Developer</h3>
          </div>
          <Social>
            <ul>
              <li>
                <a
                  href="https://trailblazer.me/id/carlosstenzel"
                  title="Trailhead"
                  target="_bank"
                >
                  <FaSalesforce />
                </a>
              </li>
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
        </Details>
      </Header>
      <Emblemas>
        <div>
          <div className="image">
            <img src="/trailhead/ranger.png" alt="RANGER" />
          </div>
          <div className="detalhes">
            <h3>RANGER</h3>
            <p>Trailhead</p>
          </div>
        </div>

        <div>
          <div className="image">
            <img src="/trailhead/lwc.png" alt="MOUNTAINEER" />
          </div>
          <div className="detalhes">
            <h3>Lightning Web Components Specialist </h3>
            <p>Superbadge</p>
          </div>
        </div>

        <div>
          <div className="image">
            <img src="/trailhead/apex.png" alt="MOUNTAINEER" />
          </div>
          <div className="detalhes">
            <h3>Apex Specialist</h3>
            <p>Superbadge</p>
          </div>
        </div>
      </Emblemas>
    </>
  );
}

export default HomePage;
