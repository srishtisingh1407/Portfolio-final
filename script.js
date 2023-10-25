var tl = gsap.timeline({scrollTrigger:{
  trigger: ".two",
  start: "0% 95%",
  end: "70% 50%",
  scrub: true,
  // markers: true,
}})

tl.to("#hero",{
  top: "115%",
  left: "6%"
}, 'hero')

tl.to("#QR",{
  top:"153%",
  left: "29%"
}, 'hero')


tl.to("#coffee",{
  top:"110%",
  rotate: "130deg",
  left: "90%"
}, 'hero')
tl.to("#comp",{
  width: "20%",
  top:"175%",
  left: "80%",
}, 'hero')

tl.to("#leaf2",{
  top:"110%",
  rotate: "130deg",
  left: "0%"
}, 'hero')

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
