
gsap.to("#hero #box" , {
    rotate: -250,
    duration: 2,
    repeat: -1,
    yoyo: true,
})

gsap.to("#section1 #box" , {
    rotate: 360,
    duration: 2,
    scrollTrigger: ("#section1 #box"),
})

gsap.from("#section2 #box", {
    opacity: 0,
    rotate: 720,
    scale: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#section2 #box",
        scroller: "body", // For learning now we are taking body as a scroller
        markers: true,   // To show marker on the page and get a visual of marker at the time of development
        start: "top 70%",  //Start marker from top 70%.
        end: "top 40%",  //End marker from top 40% .
        scrub: 2, //Scrub is used fom 1 to 5 or we can give true or false to smoothen up the animation while scrolling from start to end point. 2 feel good for now.

    }
})

gsap.from("#section3 #box", {
    opacity: 0,
    x: 200,
    rotate: 720,
    scale: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#section3 #box",
        scroller: "body", 
        markers: true,
        start: "top 70%", 
        end: "top 40%", 
        scrub: 2,
        pin: true,

    }
})

gsap.to("#section4 h1", {
    transform: "translateX(-150%)",
    // duration: 2,
    scrollTrigger:{
        trigger: "#section4",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 5,
        pin: true,

    }
})
