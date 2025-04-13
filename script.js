let video = document.querySelector(".page1 video");
let cursor2 = document.querySelector(".page3-part1 img");
let cursor3 = document.querySelector(".page3-part1 video");
let cursor1 = document.querySelector(".cursor");
function cursor(){
    document.querySelector("body").
addEventListener("mousemove",(dets)=>{

    gsap.to(".cursor",{
        x:dets.x+ 20+'px',
        y:dets.y+20 +'px',
        ease: "back.out(0.0.1)",
    })

});
video.addEventListener("mouseenter",()=>{
    cursor1.innerHTML=`<p>SOUND ON</p>`;
    cursor1.style.width=fitContent;
});
video.addEventListener("mouseleave",()=>{
    cursor1.innerHTML=``;
    cursor1.style.width=fitContent;
});
cursor2.addEventListener("mouseenter",()=>{
    cursor1.innerHTML=`<p>SOUND ON</p>`;
    cursor1.style.width=fitContent;
});
cursor2.addEventListener("mouseleave",()=>{
    cursor1.innerHTML=``;
    cursor1.style.width=fitContent;
});
cursor3.addEventListener("mouseenter",()=>{
    cursor1.innerHTML=`<p>SOUND ON</p>`;
    cursor1.style.width=fitContent;
});
cursor3.addEventListener("mouseleave",()=>{
    cursor1.innerHTML=``;
    cursor1.style.width=fitContent;
});



}
cursor();
function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();   
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 20%",
        scrub:5,
      }
})
tl.to(".page1 h1",{
    x:-80,
},"anim")
tl.to(".page1 h2",{
    x:80,
},"anim")

tl.to(".page1 video",{
    scale:1.5,
},"anim")

let t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2,.page3-part2",
        scroller:".main",
        scrub : 5,
        start:"top 50%",
        end:"top 70%",}
})
t2.to(".page1",{
    backgroundColor:"white",
    color:"black",
},"w")
t2.to(".page2",{
    backgroundColor:"white",
    color:"#180303",
},"w")
t2.to(".page3",{
    backgroundColor:"white",
    color:"black",
},"w")


let t3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3-part2",
        scroller:".main",
        scrub : 5,
        start:"top 60%",
        end:"top 90%",}
})
t3.to(".page2",{
    backgroundColor:"white",
    color:"black",
},"w")
t3.to(".page3",{
    backgroundColor:"white",
    color:"black",
},"w")
t3.to(".page3",{
    backgroundColor:"black",
    color:"white",
},)
var boxes = document.querySelectorAll(".box");
boxes.forEach(function(e){
   e.addEventListener("mouseenter",function(){
    e.style.backgroundimage ="red";
    var imgUrl = e.getAttribute("data-image");
    cursor1.style.width="300px";
    cursor1.style.height="250px";
    cursor1.style.borderRadius="30px";
    cursor1.style.backgroundImage=`url(${imgUrl})`;
    cursor1.style.zIndex = "normal";
    cursor1.style.mixBlendMode = "normal";
    

   })
   e.addEventListener("mouseleave",function(){
    cursor1.style.width="20px";
    cursor1.style.height="20px";
    cursor1.style.borderRadius="50%";
    cursor1.style.backgroundImage=``;
   })
})


document.querySelector(".footer1 .circle").addEventListener("mousemove",function(dets){
    gsap.to(".circle .effect-circle",{
      scale:"1.4",
      backgroundColor:"#000",
    })
})
document.querySelector(".footer1 .circle").addEventListener("mouseleave",function(dets){
    gsap.to(".circle .effect-circle",{
      scale:"1",
      backgroundColor:"rgb(210, 11, 255)",
    })
})

document.querySelector(".subscribe button").addEventListener("click",()=>{
    alert(`${document.querySelector(".subscribe input").value} are subscribe succesfully !`)
})