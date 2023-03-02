import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";


const HoriScroll = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.to(".boxSmall",{
            x:700,
            duration:4,
            scrollTrigger:{
                trigger:".boxSmall",
                start:"top 80%",
                end:"top 30%",
                scrub:4,
                pin:true,
                toggleActions:"restart pause reverse pause",
                toggleClass:"box-red"
            }
        })
    },[])
	return (
        <>
            <div className="box1"></div>
            <div className="box2">
                <div className="boxSmall"></div>
            </div>
        </>
	);
};

export default HoriScroll;