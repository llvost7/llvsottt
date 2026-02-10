const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const petals = Array.from({length: 40}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: 6 + Math.random() * 8,
  speed: 0.6 + Math.random(),
  drift: Math.random() * 2
}));

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  petals.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = "rgba(220,120,150,0.6)";
    ctx.ellipse(p.x, p.y, p.r, p.r*1.6, Math.sin(p.y/40), 0, Math.PI*2);
    ctx.fill();

    p.y += p.speed;
    p.x += Math.sin(p.y/60) * p.drift;

    if(p.y > canvas.height) {
      p.y = -20;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(draw);
}

draw();