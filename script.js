const entryScreen = document.getElementById("entry-screen");
const enterBtn = document.getElementById("enter-btn");
const startBtn = document.getElementById("start-btn");
const finalBtn = document.getElementById("final-btn");

const music = document.getElementById("bg-music");

const surpriseOverlay = document.querySelector(".surprise-overlay");
const finalOverlay = document.querySelector(".final-overlay");

const memoryCards = document.querySelectorAll(".memory-card");


// =====================
// ENTRY SCREEN + MUSIC
// =====================
enterBtn.addEventListener("click", () => {
    entryScreen.style.opacity = "0";

    music.volume = 0;
    music.play();

    let fadeAudio = setInterval(() => {
        if (music.volume < 0.7) {
            music.volume += 0.05;
        } else {
            clearInterval(fadeAudio);
        }
    }, 200);

    setTimeout(() => {
        entryScreen.style.display = "none";
    }, 1000);
});


// =====================
// START SURPRISE
// =====================
startBtn.addEventListener("click", () => {
    surpriseOverlay.classList.add("active");

    setTimeout(() => {
        surpriseOverlay.classList.remove("active");
        document.querySelector(".letter").scrollIntoView({ behavior: "smooth" });
    }, 4000);
});


// =====================
// MEMORY INTERACTION
// =====================
memoryCards.forEach(card => {
    card.addEventListener("click", () => {
        alert(card.dataset.memory);
    });
});


// =====================
// FINAL MESSAGE
// =====================
finalBtn.addEventListener("click", () => {
    finalOverlay.classList.add("active");
});
