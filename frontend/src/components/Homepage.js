import React from "react";
import parallaxVideo from '../resources/parallaxVideo.mp4'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="parallax">
        <video autoPlay muted loop id="parallax-video">
          <source src={parallaxVideo} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <div id='parallax-text'>Experience with anyone, anywhere</div>
      </div>
    </div>
  );
};

export default Homepage;
