function page1Animation(){
    const track = document.querySelector(".section1bottom .logos");
    track.innerHTML += track.innerHTML;
    var tl = gsap.timeline()

    tl.from("nav h1 , nav h4 , nav button" , {
        y : -40,
        opacity : 0,
        delay : 0.5,
        duration : 0.7,
        stagger : 0.15
    })

    tl.from("#center-part1 h1" , {
        x : -200,
        opacity : 0,
        duration : 0.5
    } , "-=0.3")
    tl.from("#center-part1 p" , {
        x : -100,
        opacity : 0,
        duration : 0.4
    })
    tl.from("#center-part1 button" , {
        opacity : 0,
        duration : 0.4
    })
    tl.from("#center-part2 img" , {
        opacity : 0,
        duration : 0.5,
    } , "-=0.3")
    tl.from(".section1bottom img" , {
        opacity : 0,
        y : 30,
        stagger : 0.15,
        duration : 0.6
    })
    gsap.to(track, {
    xPercent: -50,
    duration: 20,
    ease: "none",
    repeat: -1
    });    
}

page1Animation()

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger : ".section2",
            scroller : "body",
            start : "top 50%",
            end : "top 0",
            scrub : 2,
        }  
    })

    tl2.from(".services" , {
        y : 30,
        opacity : 0,
        duration : 0.5,
    })
    tl2.from(".elem.line1.left" , {
        x : -300,
        opacity : 0,
        duration : 1
    } , "linee1")
    tl2.from(".elem.line1.right" , {
        x : 300,
        opacity : 0,
        duration : 1
    } , "linee1")
    tl2.from(".elem.line2.left" , {
        x : -300,
        opacity : 0,
        duration : 1
    } , "linee2")
    tl2.from(".elem.line2.right" , {
        x : 300,
        opacity : 0,
        duration : 1
    } , "linee2")    
}

page2Animation()

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger : ".cta-section",
            scroller : "body",
            start : "top 50%",
            end : "top 0",
            scrub : 2,
        }  
    })

    tl3.from(".cta-box" , {
        y : 300,
        opacity : 0,
        duration : 1.3
    })    
}

page3Animation()