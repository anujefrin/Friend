function nextPage(num) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById("page" + num).classList.add('active');
}

function showMessage() {
    let n1 = document.getElementById("name1").value || "Bestie";
    let n2 = document.getElementById("name2").value || "Friend";

    document.getElementById("finalMessage").innerHTML = `
        💜 Hlo bestie... 💜<br><br>
        ${n1} 💖 ${n2}<br><br>
        Enoda special person nee tha dai 🫂<br>
        I miss u so so much 😢<br><br>
        Those memories I will not forget 💫<br><br>
        <strong>Memories ♾️</strong>
    `;

    nextPage(3);
}

/* Sparkle effect */
for (let i = 0; i < 80; i++) {
    let sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(sparkle);
}
