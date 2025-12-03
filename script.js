/* ===== SOM AO CLICAR ===== */
document.addEventListener("click", () => {
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_4e1fa53237.mp3");
    audio.volume = 0.2;
    audio.play();
});

/* ===== MENU ===== */
function toggleMenu(){
    document.getElementById("side").classList.toggle("active");
}

function closeMenu(){
    document.getElementById("side").classList.remove("active");
}

/* ===== LOGIN FAKE ===== */
function login(){
    document.getElementById("login").style.display = "none";
    document.body.style.overflow = "auto";
}

/* ===== EFEITO MATRIX ===== */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function draw(){
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    ctx.fillStyle = "#00ff9d";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++){
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 40);
