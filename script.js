const typingSpeed = 60;

function typeWriter(text, id, i = 0) {
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, id, i), typingSpeed);
    }
}

window.onload = function() {
    typeWriter('Marco Vela-Koentarjo', 'title');
};
