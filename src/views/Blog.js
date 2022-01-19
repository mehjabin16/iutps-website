import React, { useRef } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactRoundedImage from "react-rounded-image";
// import sections
import ParallaxScroll from "../utils/ParallaxScroll";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Blog = () => {
  const parallax = useRef();
  return (
   
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1, zIndex: 5 }}>
          <Header style={{ background: "#00000095" }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.095} speed={0} style={{ opacity: 1 }}>
          <img
            src={require("./../assets/images/Photo5.jpg")}
            style={{
              display: "block",
              width: "100%", 
            }}
          />
        </ParallaxLayer>

         <ParallaxLayer offset={1.9} speed={0} style={{ opacity: 1 }}>
         <div style={{width:"100%"}}>
          <img
            src={require("./../assets/images/Photo2.jpg")}
            style={{
              display: "block",
            }}
          />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1.35} speed={0} style={{ opacity: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>

          <div style={{  padding:"24", marginLeft:"30px" ,marginTop:"10px"}} >
           <span style={{fontSize:"16px", letterSpacing: "3.5px"}}>SEPTEMBER 1, 2015 / PORTRAIT</span>
           <h1 style={{marginTop:5, display:"block"}}>Fullscreen options</h1>
           <hr style={{  height: 3, width:"50%", marginLeft:0}}/>
           <span style={{ fontWeight:"400", fontStyle:"italic", paddingTop:"30px", display:"block"}}>
           A gray cat slinks past a wooden house. 
           There&apos;s something a little intimidating attempting to describe
           </span>
        </div>
        <div style={{ padding:"24px", marginRight:"30px" }}>
          <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at 
          nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab 
          illo inventore veritatis et quasi.</span>
          </div>
          <div style={{ padding:"24px", marginRight:"30px" }}>
            <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at 
          nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab 
          illo inventore veritatis et quasi.</span>
          </div>
        </div>
        </ParallaxLayer>

       

        <ParallaxLayer offset={3.35} speed={0.2} style={{ opacity: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
  
          <div style={{  padding:"24px", marginLeft:"30px" }} >
           <h3 style={{marginTop:0, display:"block"}}>Photographer</h3>
           <hr style={{  height: 3, width:"50%", marginLeft:0}}/>
           <h4 style={{ fontWeight:"400", display:"block"}}>
           Jane Doe
           </h4>
        </div>
        
        </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={3.8} speed={0} style={{ opacity: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>

          <div style={{  padding:"24px", marginLeft:"30px" }} >
           <FontAwesomeIcon icon="quote-left" size="lg" color="white"/>
           <h2 style={{ fontWeight:"500", fontSize:"26px",textAlign:"center" ,display:"block"}}>
           Good design is making something intelligible and memorable.
           Great design is making something memorable and meaningful.
           </h2>
        </div>
        <div style={{ padding:"24px", marginRight:"30px" }}>
          <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at 
          nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab 
          illo inventore veritatis et quasi.</span>
          </div>
          <div style={{ padding:"24px", marginRight:"30px" }}>
            <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at 
          nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab 
          illo inventore veritatis et quasi.</span>
          </div>
        </div>
        <hr style={{  height: 2, width:"95%"}}/>
        </ParallaxLayer>
         <ParallaxLayer offset={4.3} speed={0} style={{ opacity: 1 }}>
         <div style={{marginLeft:"46%"}}>
          <ReactRoundedImage 
           image={require("./../assets/images/Photo1.jpg")} 
           roundedSize="0" 
           imageWidth="110" 
           imageHeight="110"
           />
          </div>
         <h3 style={{fontSize:"26px", letterSpacing: "2px", display:"block", textAlign:"center"}}>
         Author</h3>
         <h3 style={{fontSize:"36px", letterSpacing: "2px", display:"block", textAlign:"center"}}>
         Sam Doe</h3>
        <hr style={{  height: 2, width:"95%"}}/>
        </ParallaxLayer>
        
        <ParallaxLayer offset={4.6} speed={0.2} style={{ opacity: 1 }}>
         <h3 style={{fontSize:"36px", letterSpacing: "2px", display:"block", textAlign:"center"}}>
         You might also like</h3>
         <hr style={{  height: 3, width:"10%"}}/>
        </ParallaxLayer>

 
        <ParallaxLayer offset={4.8} speed={0} style={{ opacity: 1 }}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Blog;