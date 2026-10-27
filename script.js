
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const againBtn = document.getElementById("againBtn");

const response = document.getElementById("response");
const responseTitle = document.getElementById("responseTitle");
const responseMessage = document.getElementById("responseMessage");
const hint = document.getElementById("hint");
const hearts = document.getElementById("hearts");

let heartTimer;

// Generate animated hearts
function createHearts(amount = 1) {
    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("span");

        heart.className = "floating-heart";
        heart.textContent = ["♥", "♡", "💕", "✦"][
            Math.floor(Math.random() * 4)
        ];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (12 + Math.random() * 22) + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";

        hearts.appendChild(heart);

        heart.addEventListener("animationend", () => {
            heart.remove();
        }, { once: true });
    }
}

function startHearts() {
    if (heartTimer) return;

    createHearts(10);
    heartTimer = setInterval(() => createHearts(2), 800);
}

function stopHearts() {
    clearInterval(heartTimer);
    heartTimer = null;
}

// Display a message based on her choice
function showResponse(title, message) {
    responseTitle.textContent = title;
    responseMessage.textContent = message;

    response.hidden = false;
    hint.hidden = true;
    yesBtn.hidden = true;
    noBtn.hidden = true;

    response.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Yes button
yesBtn.addEventListener("click", () => {
    showResponse(
        "Yay, Shamsa! 💖",
        "You made me smile! Here's to a genuine friendship, " +
        "beautiful conversations, happy moments, and wonderful memories. " +
        "Thank you for giving this friendship a chance! 🌸"
    );

    createHearts(45);
});

// Maybe later button
noBtn.addEventListener("click", () => {
    showResponse(
        "That's absolutely okay 🌷",
        "Thank you for taking the time to read my message, Shamsa. " +
        "Take all the time you need. Your choice matters, and I wish " +
        "you happiness always. 💗"
    );
});

// Return to the proposal
againBtn.addEventListener("click", () => {
    response.hidden = true;
    hint.hidden = false;
    yesBtn.hidden = false;
    noBtn.hidden = false;

    document.querySelector(".card").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Start and pause animations appropriately
startHearts();

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        stopHearts();
    } else {
        startHearts();
    }
});
