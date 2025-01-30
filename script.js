let crsr= document.querySelector("#cursor");

let crsrblr= document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px";
    crsr.style.top= dets.y+"px";
    crsrblr.style.left= dets.x-200+"px";
    crsrblr.style.top= dets.y-200+"px";
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