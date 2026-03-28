const themeButton = document.getElementById("theme");
const brightnessButton = document.getElementById("brightness");
const githubIcon = document.getElementById("github")

const html = document.documentElement;

themeButton.addEventListener("click", () => {
  const newTheme = html.dataset.theme === "night" ? "lofi" : "night";
  if (newTheme === "night") {
    githubIcon.src = "/static/Images/GithubWhite.png"
  } else {
    githubIcon.src = "/static/Images/GithubBlack.png"
  }
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

  localStorage.setItem("brightness", html.dataset.brightness);
});
