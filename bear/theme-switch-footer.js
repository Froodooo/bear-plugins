const preferredScheme = localStorage.getItem("color-scheme");
document.querySelector("#preferlight").style.display = preferredScheme === "light" ? "none" : "";
document.querySelector("#preferdark").style.display = preferredScheme === "light" ? "" : "none";

function switchMode(mode) {
  document.getElementById("preferlight").style.display = mode === "light" ? "none" : "";
  document.getElementById("preferdark").style.display = mode === "light" ? "" : "none";
  document.querySelector(':root').style.setProperty("color-scheme", mode);
  localStorage.setItem("color-scheme", mode);
}