import React from 'react'
import {ParallaxBanner} from "react-scroll-parallax";

const ParallaxImage = (props) =>{
    let contentStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        color:'#ffffff',
        backgroundColor: `rgba(0,0,0,${props.opacity == null && '0'})`,
        WebkitFilter: 'blur(0px) saturate(2)'

    }
    return(
        <ParallaxBanner layers={[{image: props.imgsrc, amount: props.offset}]}
        style={{
           height: props.height,
           width: props.width,
           marginLeft: props.marginLeft,
           marginRight: props.marginRight
        }}
        >
        <div >
            {props.children}
        </div>
        </ParallaxBanner>
    )
}
export default ParallaxImage;