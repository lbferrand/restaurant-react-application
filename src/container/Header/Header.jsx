import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        In our breathtaking dining room, fantastic views and savor culinary
        masterpieces set the scene for an unforgettable experience. Our
        world-renowned chef sources seafood, produce and spices from the islands
        to create a menu worthy of paradise. The choice of location is yours, as
        intimate indoor and outdoor seating is available along with dreamy
        beachside tables. For those desiring a private experience, our
        award-winning service redefines in-room dining.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"></img>
    </div>
  </div>
);

export default Header;
