import React, { useRef } from "react";
import classNames from "classnames";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ParallaxImage from "../components/elements/ParallaxImage";
import Input from "../components/elements/Input";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CarouselTest from "./../carousel";

const ParallaxScroll = () => {
  const parallax = useRef();
  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 1, zIndex: 5 }}>
          <Header style={{ background: "#00000095" }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 1 }}>
          <img
            src={require("./../assets/images/Photo6.jpg")}
            style={{
              display: "block",
              width: "28%",
              marginLeft: "77%",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.25} speed={0.5} style={{ opacity: 1 }}>
          <img
            src={require("./../assets/images/Photo2.jpg")}
            style={{
              display: "block",
              width: "35%",
              marginLeft: "57%",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.8} style={{ opacity: 1 }}>
          <img
            src={require("./../assets/images/Photo5.jpg")}
            style={{
              display: "block",
              width: "35%",
              marginLeft: "23%",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0.8} style={{ opacity: 1 }}>
          <img
            src={require("./../assets/images/Photo4.jpg")}
            style={{
              display: "block",
              width: "17%",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.3} style={{ opacity: 1 }}>
          <img
            src={require("./../assets/images/Photo6.jpg")}
            style={{
              display: "block",
              width: "24%",
              marginLeft: "15%",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.45} style={{ opacity: 1 }}>
          <img
            src={require("./../assets/images/Photo1.jpg")}
            style={{
              display: "block",
              width: "17%",
              marginLeft: -185,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.25} speed={0.2} style={{ opacity: 1 }}>
          <h1 data-reveal-delay="500" style={{ marginLeft: "15%" }}>
            {" "}
            WELCOME TO
          </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.35} speed={0.2} style={{ opacity: 1 }}>
          <h2
            data-reveal-delay="500"
            style={{ marginLeft: "15%", color: "#86b349" }}
          >
            <span>IUT PHOTOGRAPHIC SOCIETY</span>
          </h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 1 }}>
          <CarouselTest />
        </ParallaxLayer>
        
        <ParallaxLayer offset={1.7} speed={0.2} style={{ opacity: 1 }}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default ParallaxScroll;
