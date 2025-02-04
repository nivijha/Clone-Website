let crsr= document.querySelector("#cursor");

let crsrblr= document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+30+"px";
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
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale= 3;
        crsr.style.border= "0px solid #95c11e";
        crsr.style.backgroundColor= "transparent";
        h4all.style.color= "#fff";
    })
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        marker: true,
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
    y: 50,
    opacity: 0,
    duration: 1,
    //stagger: 0.4, //multiple elements ko ek ek krke chalata h
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "#body",
        markers: true,
        start: "top 60%",
        end: "top 58%",
        srub: 3
    }
})