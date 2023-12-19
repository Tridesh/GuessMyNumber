const text = "I'm a web developer and circuiteer. I am a first year student at IIT Kharagpur. \n I'm in department of Electronics and ELectrical Communication Engineering."; // Text to be typed
const div = document.querySelector(".doings");
function typingEffect (element, text, i = 0) {
    element.textContent += text[i];
    if (i === text.length - 1) {
        return;
    }
    setTimeout(() => typingEffect(element, text, i+1), 50);
}
const text2 = "Get in touch with me..^";
const div2 = document.querySelector(".next");
typingEffect(div, text);
typingEffect(div2, text2);
const linkedin = document.querySelector(".linkedin");
const insta = document.querySelector(".insta");
typingEffect(linkedin, "LinkedIn");
typingEffect(insta, "Instagram");
const text3 = "----------------------------------";
const dash = document.querySelector(".line");
typingEffect(dash, text3);