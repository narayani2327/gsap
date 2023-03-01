gsap.registerPlugin(ScrollTrigger)
// toggleActions:"play none none none"
// play pause complete reverse start rest none restart
// onEnter onLeave onEnterBack onLeaveBack

gsap.from(".logo",{
  scale:3,
  duration:2,
  opacity:0,
  scrollTrigger:".logo"
})

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
    // markers:{
    //   startColor:"purple",
    //   endColor:"fuchsia",
    //   fontsize:"3rem"
    // }
  }
})
gsap.from(".info p",{
  x:700,
  // delay:3,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:".info",
    start:"top 80%",
    end:"top 10%",
    toggleActions:"restart reverse restart none",
  }
})
gsap.from(".info img",{
  scale:1,
  // delay:3,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:".info",
    start:"top 80%",
    end:"top 10%",
    toggleActions:"restart reverse restart none",
  }
})



