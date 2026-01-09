var Path = `M 10 100 Q 500 100 990 100`

var finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector("#string")

string.addEventListener('mouseenter' , function(){
    console.log("entered")
})

string.addEventListener('mousemove' , function(dets){
    // console.log(dets)        return mouse events
    // console.log(dets.x)      value of x axis
    // console.log(dets.y)      value of y axis    
     Path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
     gsap.to("svg path" , {
        attr:{d:Path},
        duration:0.3,
        ease:"power3.out"
     })
     console.log(Path)
})

string.addEventListener("mouseleave" , function(){
    gsap.to("svg path" , {
        attr:{d:finalPath},
        duration:1.8,
        ease:"elastic.out(1,0.2)"
    })
})