import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Walmart"
              description="Using HTML, CSS, Node.js,  I have built a clone of Walmart. Which allows users to shop products for daily essentials and with a variety of products"
              link="https://github.com/pabloescobar4/Walmart-Clone"
              link1="https://dheerajm.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MPL - Clone"
              description="Using HTML, CSS, Node.js, Express & MongoDB, I have built a clone of MPL.live. Which allows users to win rewards and cash prizes by playing the games of their choice."
             
            
              link="https://github.com/pabloescobar4/mpl.live"
              link1="http://dkmehta2.herokuapp.com/"
          
              
            />
          </Col>

       

      
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
