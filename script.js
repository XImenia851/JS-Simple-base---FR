// 1. Gérer le Menu Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Changer le message selon l'heure
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();

if (hour >= 18) {
    greeting.textContent = "Bonsoir !";
} else if (hour >= 12) {
    greeting.textContent = "Bon après-midi !";
} else {
    greeting.textContent = "Bon matin !";
}

// 3. Le bouton surprise (Changement de couleur aléatoire)
const btn = document.getElementById('magic-btn');
btn.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    btn.textContent = "Couleur : #" + randomColor;
});

// 4. Toggle Mode Sombre
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});