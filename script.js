// Efek Confetti
function startConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => confettiContainer.remove(), 5000);
}

document.getElementById('surprise').addEventListener('click', startConfetti);

// Animasi Teks Muncul Perlahan
document.addEventListener("DOMContentLoaded", function () {
    const message = document.querySelector(".message");
    message.style.opacity = 0;
    setTimeout(() => {
        message.style.transition = "opacity 3s";
        message.style.opacity = 1;
    }, 500);
});

// Ganti Musik Otomatis
setTimeout(() => {
    bgMusic.pause();
    bgMusic = new Audio('happy_song.mp3'); // Ganti dengan musik lain
    bgMusic.loop = true;
    bgMusic.play();
}, 30000); // Ganti musik setelah 30 detik

// Efek Kembang Api
function fireworks() {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 2000);
}
setInterval(fireworks, 3000); // Tampilkan kembang api setiap 3 detik

// Slideshow Foto Otomatis
let currentPhoto = 0;
const photos = document.querySelectorAll(".photo img");
function changePhoto() {
    photos.forEach((photo, index) => {
        photo.style.opacity = index === currentPhoto ? 1 : 0;
    });
    currentPhoto = (currentPhoto + 1) % photos.length;
}
setInterval(changePhoto, 5000); // Ganti foto setiap 5 detik
