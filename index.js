const btnStart = document.getElementById("btnStart");

const container =
document.getElementById("fundo-animado");

/* REDIRECIONAMENTO */

btnStart.addEventListener("click", () => {

    document.body.style.transition = "1s";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "game.html";

    }, 1000);
});

/* BANDEIRAS */

const bandeiras = [

    "br","us","jp","fr","de","ca","ar","it","es",
    "pt","mx","cn","kr","ru","gb","au","za","in",
    "se","no","fi","nl","be","ch","at","gr","tr",
    "sa","eg","ng"
];

const quantidade = 35;

/* CRIA */

for(let i = 0; i < quantidade; i++){

    criarBandeira();
}

/* FUNÇÃO */

function criarBandeira(){

    const flag = document.createElement("img");

    flag.classList.add("flag");

    resetarBandeira(flag);

    container.appendChild(flag);

    flag.addEventListener("animationend", () => {

        resetarBandeira(flag);
    });
}

/* RESET */

function resetarBandeira(flag){

    const codigo = bandeiras[
        Math.floor(Math.random() * bandeiras.length)
    ];

    flag.src =
    `https://flagcdn.com/w80/${codigo}.png`;

    /* POSIÇÃO */

    flag.style.left =
    Math.random() * 100 + "vw";

    flag.style.top =
    (-Math.random() * 100) + "vh";

    /* TAMANHO */

    const size =
    Math.random() * 40 + 20;

    flag.style.width = size + "px";

    /* VELOCIDADE */

    const duration =
    Math.random() * 10 + 10;

    flag.style.animationDuration =
    duration + "s";

    /* OPACIDADE */

    flag.style.opacity =
    Math.random() * 0.2 + 0.05;

    /* BLUR */

    const blur = Math.random() * 2;

    flag.style.filter =
    `blur(${blur}px)
    drop-shadow(0 0 8px rgba(255,255,255,0.15))`;
}

/* =========================
   MÚSICA
========================= */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

/* VOLUME */

music.volume = 0;

/* PRIMEIRA INTERAÇÃO */

document.addEventListener("click", () => {

    music.muted = false;

    let volume = 0;

    const fade = setInterval(() => {

        if(volume < 0.3){

            volume += 0.01;

            music.volume = volume;

        }else{

            clearInterval(fade);
        }

    }, 100);

}, { once:true });

/* MUTE */

musicBtn.addEventListener("click", () => {

    if(music.muted){

        music.muted = false;

        musicBtn.innerHTML = "🔊";

    }else{

        music.muted = true;

        musicBtn.innerHTML = "🔇";
    }
});