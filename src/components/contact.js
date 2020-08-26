import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <h3>Contact</h3>
        <a href="mailto:ma.hoyosr@uniandes.edu.co">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
        <a href="https://wa.link/u2tg1m" target="blank">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
        <a href="https://github.com/mitooos" target="blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </footer>
    );
  }
}

export default Contact;
