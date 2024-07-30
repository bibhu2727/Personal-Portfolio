// Typing Animation
document.addEventListener("DOMContentLoaded", function() {
    const texts = ["a Software Engineer", "a Pythonist", "a Developer."];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    
    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        document.getElementById("typing-animation").textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // pause before typing the next text
        } else {
            setTimeout(type, 200); // typing speed
        }
    }());
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkMode);
}

// Check for saved dark mode preference
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
});

