import React, { useRef } from 'react'
import classNames from 'classnames';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ParallaxImage from '../components/elements/ParallaxImage';
import Input from '../components/elements/Input';
 

const ParallaxScroll = () =>  {
  const parallax = useRef()
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            backgroundSize: 'cover',
          }}
        />
        
        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 1 }}>
          <img src={require('./../assets/images/Photo6.jpg')}
          style={{ 
            display: 'block', 
            width: '28%', 
            marginLeft: '77%' 
            }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.25} speed={0.5} style={{ opacity: 1 }}>
          <img src={require('./../assets/images/Photo2.jpg')}
          style={{ 
            display: 'block', 
            width: '35%',
            marginLeft: '57%' 
            }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.8} style={{ opacity: 1 }}>
          <img src={require('./../assets/images/Photo5.jpg')} 
          style={{ 
            display: 'block', 
            width: '35%', 
            marginLeft: '23%' 
            }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0.8} style={{ opacity: 1}}>
          <img src={require('./../assets/images/Photo4.jpg')}
          style={{ 
            display: 'block', 
            width: '17%', 
            }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.3} style={{ opacity: 1}}>
          <img src={require('./../assets/images/Photo6.jpg')}
          style={{ 
            display: 'block', 
            width: '24%', 
            marginLeft: '15%' 
            }} />
        </ParallaxLayer>

         <ParallaxLayer offset={0.5} speed={0.45} style={{ opacity: 1}}>
          <img src={require('./../assets/images/Photo1.jpg')}
          style={{ 
            display: 'block', 
            width: '17%', 
            marginLeft: -185
            }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.25} speed={0.2} style={{ opacity: 1 }}>
          <h1 data-reveal-delay="500"
           style={{ marginLeft: '15%'}}> WELCOME TO   
          </h1>
        </ParallaxLayer>
         <ParallaxLayer offset={0.35} speed={0.2} style={{ opacity: 1 }}>
          <h2 data-reveal-delay="500" 
          style={{ marginLeft: '15%' ,color: '#86b349'}}>
           <span>IUT PHOTOGRAPHIC SOCIETY</span>
          </h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 1 }}>
        <div className="container" style={{backgroundColor:"#86b349", padding:'80px'}}>
          <div className="cta-slogan">
            <h3 className="m-0">
              Want to get updated?
            </h3>
          </div>
          <div className="cta-action">
            <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
        </div>
      </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}
export default ParallaxScroll;