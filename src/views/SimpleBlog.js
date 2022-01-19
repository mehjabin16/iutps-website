import React, { useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactRoundedImage from "react-rounded-image";

// import sections
import ParallaxImage from "../components/elements/ParallaxImage";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const SimpleBlog = () => {
  return (
   
  <div style={{ width: "100%", height: "100%"}}>
    <ParallaxProvider>
      <ParallaxImage 
       imgsrc={require("./../assets/images/Photo5.jpg")} 
       marginTop="7%"
       height="600px" 
       opacity="1" 
       offset="0.6">
      </ParallaxImage>
      <div style={{ display: "block" }}>
        <div style={{ padding:"24" ,marginTop:"35px", textAlign:"center"}} >
           <span style={{fontSize:"16px", letterSpacing: "3.5px"}}>
              JANUARY 1, 2021 / STREET PHOTOGRPHY
           </span>
           <h1 style={{marginTop:5}}>Fullscreen options</h1>
           <hr style={{  height: 3, width:"70%"}}/>
        </div>
        <div style={{ padding:"24px"  }}>
           <div style={{ padding:"24px", marginTop:"10px" }}>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
             Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet,
             consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan 
             leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra 
             quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem 
             ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor.
            </span>
           </div>
            <blockquote style={{ textAlign:"center",fontWeight:"600", fontSize: "28px",fontStyle:"italic", display:"block"}}>
             Good design is making something intelligible and memorable.
             Great design is making something memorable and meaningful.
            </blockquote>
           <div style={{ padding:"24px", marginTop:"20px" }}>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
             Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet,
             consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan 
             leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra 
             quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem 
             ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor.
            </span>
           </div>
        </div>
      </div>
    
      <ParallaxImage 
       imgsrc={require("./../assets/images/Photo4.jpg")} 
       height="500px" 
       opacity="1" 
       offset="0.6">
      </ParallaxImage>
       <div style={{ padding:"24px"  }}>
           <div style={{ padding:"24px", marginTop:"10px" }}>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
             Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet,
             consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan 
             leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra 
             quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem 
             ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor.
            </span>
           </div>
           <div style={{ padding:"24px", marginTop:"20px" }}>
            <span style={{ marginTop:"20%", textAlign:"justify"}}>
             Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet,
             consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan 
             leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra 
             quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem 
             ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor.
            </span>
           </div>
        </div>
       <hr style={{  height: 2, width:"95%"}}/>
         
        <div style={{marginLeft:"45%"}}>
          <ReactRoundedImage 
           image={require("./../assets/images/Photo1.jpg")} 
           roundedSize="0" 
           imageWidth="110" 
           imageHeight="110"
           />
        </div>
           
         <span style={{fontSize:"20px",paddingTop:"20px", display:"block", textAlign:"center"}}>
           Author </span>
         <span style={{fontWeight:"500",fontSize:"28px", display:"block", textAlign:"center"}}>
          Sam Doe</span>
        <hr style={{  height: 2, width:"95%"}}/>
        <h3 style={{fontSize:"36px", letterSpacing: "2px", display:"block", textAlign:"center"}}>
          You might also like
        </h3>
        <hr style={{  height: 3, width:"10%"}}/>

      </ParallaxProvider>
    </div>

      
    
  );
};

export default SimpleBlog;