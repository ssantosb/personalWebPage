import React from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faPython,
  faReact,
  faAws,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Chart } from "react-charts";

const navbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="#">MHR</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="#profile">Profile</Nav.Link>
          <Nav.Link href="#academic-info">Academic info</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#hobbies">Hobbies</Nav.Link>
          <Nav.Link href="#footer">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const aboutMe = () => {
  return (
    <div className="about-me" id="about-me">
      <h2>About me</h2>
      <img id="profile-pic" src="./profile-picture.jpg" alt="profile" />
      <div>
        <div className="bio-info">
          <dl>
            <dt>Birthday</dt>
            <dd>October 21'st 1997</dd>

            <dt id="current-job">Current job</dt>
            <dd>Systems and computer engineering student</dd>

            <dt id="current-workplace">Current workplace</dt>
            <dd>Universidad de los Andes</dd>

            <dt id="location">Location</dt>
            <dd>Bogotá, Colombia</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

const profile = () => {
  return (
    <div className="profile" id="profile">
      <h2>Profile</h2>
      <p>
        Systems and computer engineer, passionate about software engineering,
        electronic music and learning new things. Interested in full-stack
        software developments, mobile development, blockchain, cloud and IoT.
        Experience developing and designing web applications with CI/CD
        pipelines and agile methodologies. High problem solving abilities with
        ease of learning new technolgies autonomosly and eager to learn new soft
        skills.
      </p>

      <h3>Experience</h3>
      <h4>Tecniruedas</h4>
      <h5>Freelance fullstack developer</h5>
      <p>2018-Present</p>
      <p>
        Developed various products including an e-commerce solution using
        Django-rest for the backend, Angular as the dront-end framework and a
        Postgres databases. Also developed a CRM using a micorservice
        architecture using Go, Node, Kubernetes, Circleci, Postgres and MongoDB
        deployed in AWS using EKS, S3 and Cloudfront.
      </p>

      <h4>Suira</h4>
      <h5>Fullstack developer</h5>
      <p>Aug 2019-Sep 2019 / Feb 2020-May 2020</p>
      <p>
        Developed first and second versions, using Node and React for the first
        with Mongo, and Django-rest, React and Postgres for the second version.
        Both iterations where carried in a group of two using agile
        methodologies.
      </p>
    </div>
  );
};

const academic = () => {
  return (
    <div className="academic" id="academic-info">
      <h2>Academic info</h2>
      <dl>
        <dt>University</dt>
        <dd>
          Universidad de Los Andes <br />
          Systems and computer engineering
          <br />
          Bogotá, Colombia
          <br />
          2016-2021
        </dd>
        <dt>School</dt>
        <dd>
          Colegio Anglo Colombiano
          <br />
          Bogotá, Colombia
          <br />
          2002-2016
        </dd>
        <dt>Other</dt>
        <dd>
          Hult University
          <br />
          Pre-university
          <br />
          London, UK
          <br />
          2015
        </dd>
        <dd>
          Johns Hopkins
          <br />
          CTY - The Mathematics of Money
          <br />
          Rhode Island, US
          <br />
          2014
        </dd>
      </dl>
    </div>
  );
};

const skills = (data, series, axes) => {
  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <Chart data={data} series={series} axes={axes} tooltip dark />
    </div>
  );
};

const projects = () => {
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
};

const hobbies = () => {
  return (
    <div className="hobbies" id="hobbies">
      <h2>Hobbies</h2>
      <div>
        <h3>DJing</h3>

        <img
          id="dekmantel pic"
          className="img-fluid w-100"
          src="./dekmantel-header.jpg"
          alt="dekmantel header"
        />
        <h4>Some of my favorite dj sets</h4>
        <div className="row">
          <iframe
            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            title="Call Super in the lab ldn"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/j5SgdpXaHHo"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            title="Seth Troxler for cercle"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/C8iwk-iDHw8"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            title="Kerri Chandler Reel-To-Reel Session"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YC7Mw8RjlXM"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            title="Darwin and re:ni | Boiler Room x Dekmantel 2019"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gMWUlpIPqg0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="audios">
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/855563641&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/751576990&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const contact = () => {
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
};

function App() {
  // skills graph atributes
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "left" },
      { position: "bottom", type: "linear", stacked: true },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        label: "Skills",
        data: [
          ["Go", 70],
          ["NodeJs", 65],
          ["Python", 85],
          ["Swift/IOS", 45],
          ["Rust", 25],
          ["React", 35],
          ["Angular", 80],
          ["Postgres", 70],
          ["MongoDB", 70],
          ["Circleci", 60],
          ["Docker", 80],
          ["Kubernetes", 65],
          ["AWS", 40],
        ],
      },
    ],
    []
  );

  return (
    <div className="contaier">
      {navbar()}
      <header className="header text-center">
        <h1>Miguel Hoyos Ruge</h1>
      </header>

      <div className="container-lg">
        {aboutMe()}

        {profile()}

        {academic()}

        {skills(data, series, axes)}

        {projects()}

        {hobbies()}
      </div>
      {contact()}
    </div>
  );
}

export default App;
