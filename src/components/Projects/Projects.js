import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard1 from "./ProjectCards1";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import spot from "../../Assets/Projects/spot.png";
import pepper from "../../Assets/Projects/pepper.png";

import chatify from "../../Assets/Projects/chatify.png";


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
              link1="https://walmart-clone-dusky.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MPL"
              description="Using HTML, CSS, Node.js, Express & MongoDB, I have built a clone of MPL.live. Which allows users to win rewards and cash prizes by playing the games of their choice."
             
            
              link="https://github.com/pabloescobar4/mpl.live"
              link1="http://dkmehta2.herokuapp.com/"
          
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard1
              imgPath={spot}
              isBlog={false}
              title="Spotify"
              description="Using HTML, CSS, Node.js, Express & MongoDB, I have built a clone of Spotify. Which allows users to listen millions of songs and podcasts of your choice."
             
            
              link="https://github.com/pabloescobar4/spotifyyyy"
              link1="https://spotifydk.herokuapp.com/"
          
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard1
              imgPath={pepper}
              isBlog={false}
              title="Pepperfry"
              description="Using React js,Redux, Tailwind CSS, JSON, Material UI and  I have built a clone of Pepperfry. Which allows users to shop any type of furniture in India."
             
            
              link="https://github.com/pabloescobar4/pepperfry"
              link1="https://pepperfry-git-main-pabloescobar4.vercel.app/"
          
              
            />
          </Col>

       

      
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
