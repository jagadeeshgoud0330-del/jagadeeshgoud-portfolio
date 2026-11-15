const toggle = document.getElementById("languageToggle");
let language = "en";
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-en][data-de]").forEach((el) => {
    const value = el.getAttribute(`data-${next}`);
    if (value !== null) el.innerHTML = value;
  });
  toggle.textContent = next === "en" ? "DE" : "EN";
  toggle.setAttribute("aria-label", next === "en" ? "Switch to German" : "Switch to English");
}
toggle.addEventListener("click", () => setLanguage(language === "en" ? "de" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();
