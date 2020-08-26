import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile" id="profile">
        <h2>Profile</h2>
        <p>
          Systems and computer engineer, passionate about software engineering,
          electronic music and learning new things. Interested in full-stack
          software developments, mobile development, blockchain, cloud and IoT.
          Experience developing and designing web applications with CI/CD
          pipelines and agile methodologies. High problem solving abilities with
          ease of learning new technolgies autonomosly and eager to learn new
          soft skills.
        </p>

        <h3>Experience</h3>
        <h4>Tecniruedas</h4>
        <h5>Freelance fullstack developer</h5>
        <p>2018-Present</p>
        <p>
          Developed various products including an e-commerce solution using
          Django-rest for the backend, Angular as the dront-end framework and a
          Postgres databases. Also developed a CRM using a micorservice
          architecture using Go, Node, Kubernetes, Circleci, Postgres and
          MongoDB deployed in AWS using EKS, S3 and Cloudfront.
        </p>

        <h4>Suira</h4>
        <h5>Fullstack developer</h5>
        <p>Aug 2019-Sep 2019 / Feb 2020-May 2020</p>
        <p>
          Developed first and second versions, using Node and React for the
          first with Mongo, and Django-rest, React and Postgres for the second
          version. Both iterations where carried in a group of two using agile
          methodologies.
        </p>
      </div>
    );
  }
}

export default Profile;
