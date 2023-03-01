gsap.registerPlugin(ScrollTrigger)
// toggleActions:"play none none none"
// play pause complete reverse start rest none restart
// onEnter onLeave onEnterBack onLeaveBack
gsap.from("h2",{
  // x:-700,
  scale:2,
  duration:3,
  ease:"bounce",
  scrollTrigger:"h2"
})

gsap.from(".background p",{
  x:700,
  // delay:2,
  duration:3,
  opacity:0,
  scrollTrigger:{
    trigger:".background p",
    start:"top 50%",
    // end:"top 20%",
    // toggleActions:"restart reverse restart none",
    markers:{
      startColor:"purple",
      endColor:"fuchsia",
      fontsize:"3rem"
    }
  }
})
gsap.from(".one",{
  x:700,
  duration:3,
  opacity:0,
  scrollTrigger:{
    trigger:".card",
    start:"top 80%",
    end:"top 10%",
    toggleActions:"restart reverse restart none",
  }
})
gsap.from(".two",{
  scale:-1,
  delay:1,
  duration:2,
  opacity:0,
  scrollTrigger:{
    trigger:".card",
    start:"top 80%",
    end:"top 10%",
    toggleActions:"restart reverse restart none",
  }
})
gsap.from(".three",{
  x:-700,
  duration:3,
  opacity:0,
  scrollTrigger:{
    trigger:".card",
    start:"top 80%",
    end:"top 10%",
    toggleActions:"restart reverse restart none",
    markers:{
      startColor:"purple",
      endColor:"fuchsia",
      fontsize:"3rem"
    }
  }
})
// gsap.from(".info",{
//   x:700,
//   delay:3,
//   duration:3,
//   opacity:0,
//   scrollTrigger:".info"
// })





// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".container"),
//   smooth: true
// });

// ScrollTrigger.scrollerProxy(".container", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, 
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
// });


// gsap.to("body", {
//   "--color": "blue",
//   immediateRender: false,
//   scrollTrigger: {
//     trigger: ".section-1",
//     scroller: ".container",
//     scrub: true,
//     start:'top bottom',
//     end: '+=100%'
//   }
// });

// gsap.to("body", {
//   "--color": "red",
//   immediateRender: false,
//   scrollTrigger: {
//     trigger: ".section-2",
//     scroller: ".container",
//     scrub: true,
//     start:'top bottom',
//     end: '+=100%'
//   }
// });

// gsap.to("body", {
//   "--color": "green",
//   immediateRender: false,
//   scrollTrigger: {
//     trigger: ".section-3",
//     scroller: ".container",
//     scrub: true,
//     start:'top bottom',
//     end: '+=100%'  
//   }
// });



// locoScroll.on("scroll", ScrollTrigger.update);
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();