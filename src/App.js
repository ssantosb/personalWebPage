import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container-flow">
      <header className="header text-center">
        <h1>Miguel Hoyos Ruge</h1>
      </header>

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#profile">
                Profile
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#academic-info">
                Academic info
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#hobbies">
                Hobbies
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="about-me" id="about-me">
        <h2>About me</h2>
        <img id="profile-pic" src="./profile-picture.jpg" alt="profile" />
        <div>
          <div className="bio-info">
            <table>
              <tr>
                <th id="birthday">Birthday</th>
                <td>21 de octubre de 1997</td>
              </tr>
              <tr>
                <th id="current-workplace">Current workplace</th>
                <td>Universidad de los Andes</td>
              </tr>
              <tr>
                <th id="location">Location</th>
                <td>Bogotá, Colombia</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="profile" id="profile">
        <h2>Profile</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem deserunt esse quos totam illo impedit? Temporibus
          fugiat corporis itaque veniam assumenda numquam labore esse a in,
          ducimus nobis excepturi repellendus.Dolorum non atque esse eius
          officiis commodi, aut perferendis, dolor distinctio ab illum
          reiciendis vitae cum perspiciatis vel a? Dolorem voluptas tempore
          dolor consectetur nostrum labore qui error et voluptate.
        </p>

        <h3>Experience</h3>
        <dl>
          <h4>Tecniruedas</h4>
          <dt>Fullstack developer</dt>
          <dd>2018-Present</dd>

          <h4>Suira</h4>
          <dt>Fullstack developer</dt>
          <dd>Aug 2019-Sep 2019 / Feb 2020-May 2020</dd>
        </dl>
      </div>

      <div className="academic" id="academic">
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
          Colegio Anglo Colombiano
          <br />
          Bogotá, Colombia
          <br />
          2002-2016
          <dt>Other</dt>
          <dd>
            Hult University-2015
            <br /> London, UK
          </dd>
        </dl>
      </div>

      <div className="projects" id="projects">
        <h2>Projects</h2>
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Proyect 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" target="blank" className="btn btn-primary">
                Repo
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Proyect 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" target="blank" className="btn btn-primary">
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hobbies" id="hobbies"></div>

      <div className="sitios-interes" id="sitios-interes">
        <h2>Sitios de Interes</h2>

        <div className="videos" id="videos">
          <h3>Videos</h3>
          <iframe
            title="Call Super in the lab ldn"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/j5SgdpXaHHo"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            title="Seth Troxler for cercle"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/C8iwk-iDHw8"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            title="Kerri Chandler Reel-To-Reel Session"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YC7Mw8RjlXM"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <footer className="footer" id="footer">
        <p>
          Email:
          <a href="mailto:ma.hoyosr@uniandes.edu.co">
            ma.hoyosr@uniandes.edu.co
          </a>
        </p>
        <p>
          Whatsapp:
          <a href="https://wa.link/u2tg1m" target="blank">
            +57 3102452958
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
