import React from 'react';
import "./app.css";
import HoriScroll from './components/HoriScroll';
import Para from './components/Para';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const App = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".divs div p",{
            x:-100,
            duration:4,
            scrollTrigger:{
                trigger:".divs div p",
                start:"top 80%",
                end:"top 30%",
                toggleActions:"play pause reverse none",
            }
        })    


        let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

        gsap.utils.toArray("section").forEach((section, i) => {
            section.bg = section.querySelector(".bg"); 

            // Give the backgrounds some random images
            section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;
            
            // the first image (i === 0) should be handled differently because it should start at the very top.
            // use function-based values in order to keep things responsive
            gsap.fromTo(section.bg, {
                backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
            }, {
                backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
                ease: "none",
                scrollTrigger: {
                trigger: section,
                start: () => i ? "top bottom" : "top top", 
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true // to make it responsive
                }
            });

        });
    },[])


    
	return (
        <>
            <HoriScroll/>
            <div className="divs">
                <div>
                    <Para/>
                    <p>Hello World</p>
                </div>
            </div>
            <section>
                <div class="bg"></div>
                <h1>Simple parallax sections</h1>
            </section>
            <section>
                <div class="bg"></div>
                <h1>Hey look, a title</h1>
            </section>
            <section>
                <div class="bg"></div>
                <h1>Snow Capped Mountains</h1>
            </section>
            <section>
                <div class="bg"></div>
                <h1>Beach</h1>
            </section>
            <section>
                <div class="bg"></div>
                <h1>Nice, right?</h1>
            </section>
        </>
	);
};

export default App;