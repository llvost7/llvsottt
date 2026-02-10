// Keeps card animations smooth on slower devices
document.querySelectorAll(".card").forEach(c=>{
  c.style.willChange = "transform, opacity";
});