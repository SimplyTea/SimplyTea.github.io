const themeButton = document.getElementById("theme-toggle");
const brightnessButton = document.getElementById("brightness");

const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const savedBrightness = localStorage.getItem("brightness");
// I know what you're going to say, answer is I don't care. I'm going to use the memory for these consts
// They're already running a browser we can save THREE useless consts it'll be fine.
if (savedTheme) {
  html.dataset.theme = savedTheme;
}

if (brightness) {
  html.dataset.brightness = savedBrightness;
}

themeButton.addEventListener("click", () => {
  const newTheme = html.dataset.theme === "night" ? "lofi" : "night";
  html.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
});

brightnessButton.addEventListener("click", () => {
  const currentBrightness = html.dataset.brightness;

  if (currentBrightness === "normal") {
    html.dataset.brightness = "darker";

  } else if (currentBrightness === "darker") {
    html.dataset.brightness = "lighter";

  } else {
    html.dataset.brightness = "normal";
  }

  localStorage.setItem("brightness". html.dataset.brightness);
});
