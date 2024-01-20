import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { stackList } from "../../data/ProjectData";
import {
  ContactWrapper,
  Image,
  Tech,
  TechImg,
  TechName,
  Technologies,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man_svgrepo.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I'm <strong>Mohit Pardhi,</strong> based in India and
              specializing as a MERN stack developer. My expertise includes
              working with JavaScript and TypeScript for building dynamic and
              efficient web applications. I have hands-on experience with
              databases like MongoDB, MySQL, and Redis, allowing me to manage
              and organize data effectively.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              In addition to my MERN stack skills, I'm proficient in using
              React.js for creating interactive and user-friendly interfaces. I
              also have experience working with AWS (Amazon Web Services),
              bringing cloud computing capabilities to my projects.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My passion for web development drives me to stay updated with the
              latest technologies, ensuring that I can contribute effectively to
              innovative and impactful projects.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
