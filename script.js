let crsr= document.querySelector("#cursor");

let crsrblr= document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px";
    crsr.style.top= dets.y+"px";
    crsrblr.style.left= dets.x-200+"px";
    crsrblr.style.top= dets.y-200+"px";
})


let h4all= document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale= 3;
        crsr.style.border= "1px solid #fff";
        crsr.style.backgroundColor= "transparent";
        crsr.style.transition= "all ease 0.2s";
        elem.style.color= "black";
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale= 1;
        crsr.style.border= "1px solid #95c11e";
        crsr.style.backgroundColor= "#95c11e";
        elem.style.color= "white";
    })

})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        marker: false,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -50%%",
        end: "top -100%%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y: 90,
    opacity: 0,
    duration: 1,
    //stagger: 0.4, //multiple elements ko ek ek krke chalata h
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        markers: false,
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})

gsap.to(".card",{
    scale: 1,
    opacity: 1,
    duration: 1,
    stagger: 0.1, //multiple elements ko ek ek krke chalata h
    overwrite: "auto",
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 60%",
        scrub: 2
    }
})

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.killTweensOf(card);                 // Stop any ongoing GSAP animations
        gsap.set(card, { clearProps: "transform" }); // Clear GSAP transforms
        card.style.transform = "rotate3d(1, 1, 0, 20deg)"; // Apply rotation
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotate3d(0, 0, 0, 0deg)"; // Reset on mouse leave
    });
});

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 3
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 50%",
        scrub: 3
    }
})

gsap.from("#page4 h1",{
    y: 80,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 50%",
        scrub: 3
    }
})
