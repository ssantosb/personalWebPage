import React from "react";

class Hobbies extends React.Component {
  render() {
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
  }
}

export default Hobbies;
