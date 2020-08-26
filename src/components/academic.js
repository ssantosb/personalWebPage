import React from "react";

class Academic extends React.Component {
  render() {
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
  }
}

export default Academic;
