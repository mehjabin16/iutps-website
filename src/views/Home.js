import React, { useState } from "react";
import SmallComponent from "./SmallComponent";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ParallaxScroll from '../utils/ParallaxScroll';
import CarouselTest from './../carousel';


const Home = () => {
  const [toggleDark, settoggleDark] = useState(false);
  const myTheme = createMuiTheme({
    
    // Theme settings
    palette: {
      type: "dark"
    },
  });
  
  return (
    
    // Wrapping code in ThemeProvider
    <ThemeProvider theme={myTheme}>
      <ParallaxScroll />
      
      <CarouselTest />
    </ThemeProvider>
  );
}

export default Home;