import React, { useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import sections
import ParallaxImage from "./../components/elements/ParallaxImage";
import ParallaxScroll from "../utils/ParallaxScroll";

const Gallery = () => {
  return (
    <div>
      <div className="header-space" style={{ height: "80px" }}></div>

      <img src="./features-split-image-01.png" />
      <h1>Test routing</h1>
    </div>
  );
};

export default Gallery;
