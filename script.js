const typingSpeed = 90;

function typeWriter(text, id, i = 0) {
    if (i < text.length) {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, id, i), typingSpeed); // Pass i here
    }
}

window.onload = function() {
    typeWriter('Marco Vela-Koentarjo', 'title'); // Assuming the element has id="title"
};
