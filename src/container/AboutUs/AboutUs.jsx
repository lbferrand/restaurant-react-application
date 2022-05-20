import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img className="spoon__img" src={images.spoon} alt="about_spoon"></img>
        <p className="p__opensans">
          Led by our Executive Chef and a carefully composed culinary team, The
          Dining Room never fails to impress. In the restaurant’s earlier days,
          it was recognized as the Best Hotel Dining in Florida and #3
          Restaurant in the U.S. by Zagat.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife"></img>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img className="spoon__img" src={images.spoon} alt="about_spoon"></img>
        <p className="p__opensans">
          Chef Brendan Mica was born and raised in Los Angeles, California, but
          now resides in the beautiful Florida Keys with his young family.
          Brendan’s appointment as Executive Chef at Little Palm Island is the
          result of traveling the world to further his craft.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
