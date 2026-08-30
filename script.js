function scrollToLanguages() {
  document.getElementById("languages").scrollIntoView({
    behavior: "smooth"
  });
}


function selectLanguage(language) {
  alert(
    language +
    " selected! The learning page will be connected later."
  );
}


function toggleMenu() {
  const nav = document.querySelector(".navbar nav");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "78px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "25px";
    nav.style.background = "#f8f8f6";
  }
}```javascript
/* ============================= */
/* LANGUAGE LEARNING SYSTEM */
/* ============================= */

function selectLanguage(language) {

  const learningSection = document.getElementById("learning");
  const languageTitle =
    document.getElementById("selectedLanguageTitle");

  const languageDescription =
    document.getElementById("selectedLanguageDescription");

  languageTitle.textContent = language;

  languageDescription.textContent =
    "Choose your level and start learning " + language + ".";

  // Hide other sections
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".languages-section").style.display = "none";

  const features = document.querySelector(".features-section");

  if (features) {
    features.style.display = "none";
  }

  const cta = document.querySelector(".cta-section");

  if (cta) {
    cta.style.display = "none";
  }

  learningSection.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function closeLearning() {

  const learningSection =
    document.getElementById("learning");

  learningSection.style.display = "none";

  document.querySelector(".hero").style.display = "";
  document.querySelector(".languages-section").style.display = "";

  const features =
    document.querySelector(".features-section");

  if (features) {
    features.style.display = "";
  }

  const cta =
    document.querySelector(".cta-section");

  if (cta) {
    cta.style.display = "";
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function openLevel(level) {

  alert(
    "You selected " +
    level +
    ". Lessons will be connected next."
  );

}
```

