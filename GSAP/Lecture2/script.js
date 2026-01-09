// gsap.from("#page1 #box" , {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })
// gsap.from("#page2 #box" , {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })

// gsap.from("#page2 h1" , {
//     opacity:0,
//     x:500,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })
// gsap.from("#page2 h2" , {
//     opacity:0,
//     x:-500,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }

gsap.from("#page2 #box" , {
    scale:0,
    opacity:0,
    rotate:720,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,              // animation run and depend upon scrolling  
        pin:true
    }
})