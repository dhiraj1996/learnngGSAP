gsap.to("#box1",{
    x: 800,
    duration: 2,
    delay: 1,
})

gsap.from("#box2", {
    x: 600,
    y: 100,
    duration: 2,
    delay:1,
})

gsap.to("#box3",{
    x:900,
    duration:2,
    delay:1,
    backgroundColor: "blue",
    borderRadius: "50%",
    rotate: 360,
    display: "hidden",
})

gsap.from("h2", {  //Here I selected h1 all of the h1 element are selected.
    color: "red",  // From red to original which is white.
    duration: 1,
    delay: 1,
    y: 30,
    opacity: 0,

    // Stagger is used to display 1 by 1 here it is displaying h2 element 1 by 1 if value is set to 1 it means it take 1 second from each element.
    stagger: 0.8,
    // If value is assined -1 it will work backword first third element will appear then second then first.
    //Try it it will look cool more than above.
    // stagger: -1, 

})

gsap.to("#box4", {
    x:1000,
    duration: 2,  
    delay: 1,
    rotate: 360, //It take degree value 360 degree rotate.
    //repeat 1 means to repeat 1 time it means 1st time it will run then it will repeat 1 time it means it will run for 2 times.
    // repeat: 1,
    //repeat: -1 means to run for infinite
    repeat: -1,

    //yoyo like yoyo toy it come back to original position.
    yoyo:true,
})

/////////////////////////////////////////=======Timeline=========///////////////////////////////////////

// gsap.to("#box5", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
// })
// gsap.to("#box6", {
//     x: 1000,
//     duration: 2,
//     delay: 3, //Adding previous delay + duration time which is 2 + 1= 3.
//     rotate: 360,
// })
// gsap.to("#box7", {
//     x: 1000,
//     scale: 0.5, //scale is used to make object scale big or small.
//     duration: 2,
//     delay: 5,  //Adding previous delay + duration time which is 3 + 2 = 6s.
//     rotate: 360,
//     borderRadius: "50%",
    
// })

// To make this code syncronos and run 1 after another and also delay+calculation complex calculation.
// We use timeline method

var tl = gsap.timeline()

tl.to("#box5", {
    x: 500,
    duration: 2,
    delay: 1,
})
tl.to("#box6", {
    x: 700,
    duration: 2,
    rotate: 360,
})
tl.to("#box7", {
    x: 900,
    scale: 0.5, //scale is used to make object scale big or small.
    duration: 2,
    rotate: 360,
    borderRadius: "50%",
})


var nav = gsap.timeline()
nav.from("#nav-h1", {
    y: -50,
    duration: 1,
    opacity: 0,
    
})
// nav.from("#subheading", {
//     y: -50,
//     duration: 2,
//     opacity: 0,
//     // stagger: 0.3,
// })
nav.from(".navH4", {
    y: -50,
    duration: 2,
    opacity: 0,
    stagger: 0.3,
    
})
nav.from("#head", {
    
    duration:2,
    opacity: 0,
    scale: 0.2,
})