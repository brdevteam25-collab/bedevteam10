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
}
