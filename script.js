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
```javascript
/* ============================= */
/* LESSON DASHBOARD */
/* ============================= */

function openLevel(level) {

  const levelSection =
    document.querySelector(".learning-section");

  const lessonDashboard =
    document.getElementById("lessonDashboard");

  const selectedLanguage =
    document.getElementById("selectedLanguageTitle").textContent;

  document.getElementById("lessonLevelLabel").textContent =
    level + " • " + getLevelName(level);

  document.getElementById("lessonLanguageTitle").textContent =
    selectedLanguage;

  levelSection.style.display = "none";
  lessonDashboard.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function getLevelName(level) {

  const names = {
    A1: "BEGINNER",
    A2: "ELEMENTARY",
    B1: "INTERMEDIATE",
    B2: "UPPER INTERMEDIATE",
    C1: "ADVANCED",
    C2: "PROFICIENCY"
  };

  return names[level] || "LEVEL";
}


function backToLevels() {

  document.getElementById("lessonDashboard").style.display =
    "none";

  document.querySelector(".learning-section").style.display =
    "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function openLesson(lessonNumber) {

  alert(
    "Lesson " +
    lessonNumber +
    " will open here. The full lesson interface is next."
  );

}


function startPractice(type) {

  if (type === "vocabulary") {
    alert("Vocabulary practice will open here.");
  }

  if (type === "quiz") {
    alert("Quiz will open here.");
  }

}
```
```javascript
/* ============================= */
/* LESSON INTERFACE */
/* ============================= */

function openLesson(lessonNumber) {

  const lessonDashboard =
    document.getElementById("lessonDashboard");

  const lessonInterface =
    document.getElementById("lessonInterface");

  const selectedLanguage =
    document.getElementById("lessonLanguageTitle").textContent;

  document.getElementById("currentLessonNumber").textContent =
    "LESSON " + String(lessonNumber).padStart(2, "0");

  document.querySelector(".lesson-hero .section-label").textContent =
    selectedLanguage.toUpperCase() + " • A1";

  if (lessonNumber === 1) {

    document.getElementById("currentLessonTitle").textContent =
      "Greetings & Introductions";

    document.getElementById("currentLessonDescription").textContent =
      "Learn basic greetings and introduce yourself.";

  }

  if (lessonNumber === 2) {

    document.getElementById("currentLessonTitle").textContent =
      "Numbers & Time";

    document.getElementById("currentLessonDescription").textContent =
      "Learn numbers, dates and how to tell the time.";

  }

  if (lessonNumber === 3) {

    document.getElementById("currentLessonTitle").textContent =
      "Family & People";

    document.getElementById("currentLessonDescription").textContent =
      "Learn how to talk about your family and people.";

  }

  if (lessonNumber === 4) {

    document.getElementById("currentLessonTitle").textContent =
      "Everyday Activities";

    document.getElementById("currentLessonDescription").textContent =
      "Describe your daily routine and activities.";

  }

  lessonDashboard.style.display = "none";
  lessonInterface.style.display = "block";

  showLessonTab("learn");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function showLessonTab(tabName) {

  const contents =
    document.querySelectorAll(".lesson-tab-content");

  contents.forEach(content => {
    content.classList.remove("active");
  });


  const tabs =
    document.querySelectorAll(".lesson-tab");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });


  const selectedContent =
    document.getElementById(tabName + "Content");

  if (selectedContent) {
    selectedContent.classList.add("active");
  }


  tabs.forEach(tab => {

    if (
      tab.textContent
        .toLowerCase()
        .includes(tabName)
    ) {
      tab.classList.add("active");
    }

  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function backToLessonList() {

  document.getElementById("lessonInterface").style.display =
    "none";

  document.getElementById("lessonDashboard").style.display =
    "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function playPronunciation(word) {

  if ("speechSynthesis" in window) {

    const speech =
      new SpeechSynthesisUtterance(word);

    speech.lang = "de-DE";

    speechSynthesis.speak(speech);

  } else {

    alert("Audio is not supported on this browser.");

  }

}


function checkAnswer(button, correct) {

  const feedback =
    document.getElementById("practiceFeedback");

  const buttons =
    button.parentElement.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
  });


  if (correct) {

    button.classList.add("correct");

    feedback.textContent =
      "✓ Correct! Great job.";

  } else {

    button.classList.add("wrong");

    feedback.textContent =
      "✕ Not quite. Try reviewing the vocabulary.";

  }

}


function checkQuizAnswer(button, correct) {

  const feedback =
    document.getElementById("quizFeedback");

  const buttons =
    button.parentElement.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
  });


  if (correct) {

    button.classList.add("correct");

    feedback.textContent =
      "✓ Correct answer!";

  } else {

    button.classList.add("wrong");

    feedback.textContent =
      "✕ Incorrect. Review the lesson and try again.";

  }

}


function completeLesson() {

  const progressFill =
    document.getElementById("courseProgressFill");

  const progressText =
    document.getElementById("courseProgressText");

  progressFill.style.width = "10%";

  progressText.textContent = "10%";

  alert(
    "🎉 Lesson completed! Your progress has been updated."
  );

}
```
```javascript id="r8q4ms"
/* ============================= */
/* STUDENT DASHBOARD */
/* ============================= */

function openDashboard() {

  // Hide normal homepage sections

  const sectionsToHide = [
    ".hero",
    ".languages-section",
    ".features-section",
    ".cta-section",
    ".learning-section",
    ".lesson-dashboard",
    ".lesson-interface"
  ];

  sectionsToHide.forEach(selector => {

    const section =
      document.querySelector(selector);

    if (section) {
      section.style.display = "none";
    }

  });


  // Show dashboard

  const dashboard =
    document.getElementById("studentDashboard");

  dashboard.style.display = "block";


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function openDashboardCourse() {

  const dashboard =
    document.getElementById("studentDashboard");

  dashboard.style.display = "none";

  const lessonDashboard =
    document.getElementById("lessonDashboard");

  lessonDashboard.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
```



```

