import React, { useRef } from 'react'
import {ParallaxProvider} from "react-scroll-parallax"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import sections
import ParallaxImage from './../components/elements/ParallaxImage';
import ParallaxScroll from '../utils/ParallaxScroll';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {
  return (
    <> 
      <ParallaxProvider>
            <ParallaxScroll/>
      </ParallaxProvider>
    </>
  );
}

export default Home;