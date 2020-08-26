import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
  faAws,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects" id="projects">
        <h2>Projects</h2>
        <div className="card-deck">
          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Suira</h5>
              <p className="card-text">
                Web application developed in a team of two. Social network for
                freelancers implmented in Django-rest and React backend deployed
                in AWS using Elastic Beanstalk and frontend deployed in S3 and
                Cloudfront from AWS.
              </p>
              <p>
                <FontAwesomeIcon icon={faPython} size="lg" />
                <FontAwesomeIcon icon={faReact} size="lg" />
                <FontAwesomeIcon icon={faAws} size="lg" />
              </p>
              <a
                href="https://github.com/mitooos/Suira"
                target="blank"
                className="btn btn-primary"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Fabricas Grafos</h5>
              <p className="card-text">
                Simple software product line implementing a graph library using
                the factory design pattern to configure the variability.
              </p>
              <p className="icons">
                <FontAwesomeIcon icon={faJava} size="lg" />
              </p>
              <a
                href="https://github.com/mitooos/FabricasSW-Grafos"
                target="blank"
                className="btn btn-primary"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
