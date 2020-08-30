import React from "react";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me" id="about-me">
        <!--Recomendacion: Utilizar bootstrap para volver esta imagen un poco mas responsive, pues el tamaño queda un poco desalineado para dispositivos pequeños--> 
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
  }
}

export default AboutMe;
