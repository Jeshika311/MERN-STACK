gsap.to("#box1" , {
    x:1000,               // move x axis to 1000
    y:1000,
    duration:2,       // take 2 sec to move 1000
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",      // as the box moves , its border radius drcresae and it converts it into a circle
    scale:2,              // size becomes double to the original
    repeat:1,              // repeat same task and if we give its value to -1 then it repeat infinitely
    yoyo:true
})

gsap.from("#box2" , {
    x:1200,
    duration:2,
    delay:3
})
// when we move from initial to final position........ gsap.to
// when we move from final to initial position........ gsap.from

gsap.from("h1",{
    y:20,
    opacity:0,
    duration:2,
    delay:1,
    stagger:1
})

var tl = gsap.timeline()
tl.to("#box1" , {
    x:1000,
    y:1000,
    duration:2,
    delay:1,
})

tl.from("h2" , {
    y:-30,
    opacity:0,
    duration:1,
    deay:0.5
})

tl.from("h4" , {
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})