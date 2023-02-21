import React, { useState } from "react";
import { render } from "react-dom";

const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div>
        <img
          // id="grow"
          src="assets/img/realtime_assets/cta-bg.jpg"
          // class="imgRT1"
          // height="300px"
          alt=""
        />
      </div>
    </div>
  );
};

const HoverText = () => {
  return (
    <div>
      Hovering right meow!
      <span role="img" aria-label="cat">
        🐱
      </span>
    </div>
  );
};

const Honeywell = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div class="topPadding">
      {/* Hover over this div to hide/show <HoverText /> */}
      <HoverableDiv
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering && <HoverText />}
    </div>
  );
};

export default Honeywell;
