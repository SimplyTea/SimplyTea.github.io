(function () { // I need to rewrite this as currently the github logo will not display on darker if it works. (For unknown reason it appears it actually doesn't??)
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "night";
const savedBrightness = localStorage.getItem("brightness") || "normal";
// I know what you're going to say, answer is I don't care. I'm going to use the memory for these consts
// They're already running a browser we can save THREE useless consts it'll be fine.
html.dataset.theme = savedTheme
html.dataset.brightness = savedBrightness
html.setAttribute('data-theme', savedTheme);
html.setAttribute('data-brightness', savedBrightness);
})()