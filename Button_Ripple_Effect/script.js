let btn = document.querySelector(".btn");
let ripple = document.querySelector(".ripple");

btn.onclick = function (e) {
  let btnPos = btn.getBoundingClientRect();
  let x = e.clientX;
  let y = e.clientY;

  ripple.style.top = y - btnPos.top + "px";
  ripple.style.left = x - btnPos.left + "px";

  ripple.style.animationName = "grow";

  setTimeout(() => {
    ripple.style.animationName = "unset";
  }, 600);
};
