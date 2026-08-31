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
```javascript
/* ============================= */
/* LANGUAGE EXPLORER */
/* ============================= */

function openLanguageExplorer() {

  document.getElementById("studentDashboard").style.display =
    "none";

  document.getElementById("languageExplorer").style.display =
    "block";

  document.getElementById("languageOverview").style.display =
    "none";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function filterLanguages() {

  const search =
    document
      .getElementById("languageSearch")
      .value
      .toLowerCase();

  const cards =
    document.querySelectorAll(
      ".explorer-language-card"
    );

  let found = false;


  cards.forEach(card => {

    const language =
      card
        .getAttribute("data-language")
        .toLowerCase();

    if (language.includes(search)) {

      card.style.display = "flex";
      found = true;

    } else {

      card.style.display = "none";

    }

  });


  document.getElementById("noLanguageResults")
    .style.display = found ? "none" : "block";

}


function selectLanguage(language, flag) {

  document.getElementById("languageExplorer").style.display =
    "none";

  document.getElementById("languageOverview").style.display =
    "block";

  document.getElementById("selectedLanguageName").textContent =
    language;

  document.getElementById("selectedLanguageFlag").textContent =
    flag;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function backToExplorer() {

  document.getElementById("languageOverview").style.display =
    "none";

  document.getElementById("languageExplorer").style.display =
    "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function backFromExplorer() {

  document.getElementById("languageExplorer").style.display =
    "none";

  document.getElementById("studentDashboard").style.display =
    "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function openLanguageLevel(level) {

  /*
   * For now this connects the selected language
   * to our existing lesson dashboard.
   */

  const language =
    document.getElementById("selectedLanguageName").textContent;


  document.getElementById("languageOverview").style.display =
    "none";

  document.getElementById("lessonDashboard").style.display =
    "block";


  document.getElementById("lessonLevelLabel").textContent =
    level + " • " + getLevelName(level);


  document.getElementById("lessonLanguageTitle").textContent =
    language;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
```
```javascript id="xq9m1d"
/* ============================= */
/* ADMIN PANEL */
/* ============================= */

const defaultLanguages = [
  {
    name: "German",
    native: "Deutsch",
    flag: "🇩🇪",
    status: "Published"
  },
  {
    name: "Spanish",
    native: "Español",
    flag: "🇪🇸",
    status: "Published"
  },
  {
    name: "French",
    native: "Français",
    flag: "🇫🇷",
    status: "Published"
  },
  {
    name: "Japanese",
    native: "日本語",
    flag: "🇯🇵",
    status: "Published"
  }
];


function getLanguages() {

  const saved =
    localStorage.getItem("tutorLanguages");

  if (saved) {
    return JSON.parse(saved);
  }

  localStorage.setItem(
    "tutorLanguages",
    JSON.stringify(defaultLanguages)
  );

  return defaultLanguages;
}


function saveLanguages(languages) {

  localStorage.setItem(
    "tutorLanguages",
    JSON.stringify(languages)
  );

}


function openAdminPanel() {

  document.querySelectorAll("main > section")
    .forEach(section => {
      section.style.display = "none";
    });


  document.getElementById("adminPanel").style.display =
    "block";


  renderAdminLanguages();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function closeAdminPanel() {

  document.getElementById("adminPanel").style.display =
    "none";

  document.querySelector(".hero").style.display =
    "";

  document.querySelector(".languages-section").style.display =
    "";

  document.querySelector(".features-section").style.display =
    "";

  document.querySelector(".cta-section").style.display =
    "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function showAdminSection(sectionName) {

  document.querySelectorAll(".admin-section")
    .forEach(section => {
      section.classList.remove("active");
    });


  document.querySelectorAll(".admin-nav-btn")
    .forEach(button => {
      button.classList.remove("active");
    });


  const section =
    document.getElementById(
      "admin" +
      sectionName.charAt(0).toUpperCase() +
      sectionName.slice(1)
    );

  if (section) {
    section.classList.add("active");
  }


  event.currentTarget.classList.add("active");

}


function openAddLanguage() {

  document.getElementById("addLanguageForm")
    .classList.add("active");

}


function closeAddLanguage() {

  document.getElementById("addLanguageForm")
    .classList.remove("active");

}


function addNewLanguage() {

  const name =
    document.getElementById("newLanguageName").value.trim();

  const native =
    document.getElementById("newLanguageNative").value.trim();

  const flag =
    document.getElementById("newLanguageFlag").value.trim();

  const status =
    document.getElementById("newLanguageStatus").value;


  if (!name || !native || !flag) {

    alert("Please fill in all fields.");

    return;

  }


  const languages = getLanguages();


  const exists =
    languages.some(
      language =>
        language.name.toLowerCase() === name.toLowerCase()
    );


  if (exists) {

    alert("This language already exists.");

    return;

  }


  languages.push({
    name: name,
    native: native,
    flag: flag,
    status:
      status === "published"
        ? "Published"
        : "Draft"
  });


  saveLanguages(languages);

  renderAdminLanguages();

  addLanguageToStudentExplorer({
    name: name,
    native: native,
    flag: flag,
    status:
      status === "published"
        ? "Published"
        : "Draft"
  });


  document.getElementById("newLanguageName").value = "";
  document.getElementById("newLanguageNative").value = "";
  document.getElementById("newLanguageFlag").value = "";

  closeAddLanguage();


  alert(
    name +
    " has been added successfully!"
  );

}


function renderAdminLanguages() {

  const container =
    document.getElementById("adminLanguageList");

  if (!container) return;


  const languages =
    getLanguages();


  container.innerHTML = "";


  languages.forEach((language, index) => {

    const row =
      document.createElement("div");

    row.className =
      "admin-language-row";


    row.innerHTML = `

      <div class="admin-language-name">

        <span>${language.flag}</span>

        <div>
          <strong>${language.name}</strong>
          <small>${language.native}</small>
        </div>

      </div>

      <span class="admin-level-count">
        A1 – C2
      </span>

      <span class="admin-status">
        ${language.status}
      </span>

      <div class="admin-actions">

        <button
          onclick="editLanguage(${index})">
          Edit
        </button>

        <button
          onclick="deleteLanguage(${index})">
          Delete
        </button>

      </div>

    `;


    container.appendChild(row);

  });

}


function editLanguage(index) {

  const languages =
    getLanguages();

  const language =
    languages[index];


  const newName =
    prompt(
      "Language name:",
      language.name
    );


  if (!newName) return;


  language.name =
    newName.trim();


  saveLanguages(languages);

  renderAdminLanguages();

  updateStudentLanguageCards();

}


function deleteLanguage(index) {

  const languages =
    getLanguages();

  const language =
    languages[index];


  const confirmed =
    confirm(
      "Delete " +
      language.name +
      "?"
    );


  if (!confirmed) return;


  languages.splice(index, 1);

  saveLanguages(languages);

  renderAdminLanguages();

  updateStudentLanguageCards();

}


function addLanguageToStudentExplorer(language) {

  const grid =
    document.getElementById("explorerGrid");

  if (!grid) return;


  const card =
    document.createElement("div");

  card.className =
    "explorer-language-card";

  card.setAttribute(
    "data-language",
    language.name
  );


  card.onclick = function() {

    selectLanguage(
      language.name,
      language.flag
    );

  };


  card.innerHTML = `

    <div class="explorer-flag">
      ${language.flag}
    </div>

    <div class="explorer-info">

      <span>
        ${language.native.toUpperCase()}
      </span>

      <h3>
        ${language.name}
      </h3>

      <p>
        Beginner to advanced
      </p>

    </div>

    <span class="explorer-arrow">
      →
    </span>

  `;


  grid.appendChild(card);

}


function updateStudentLanguageCards() {

  const grid =
    document.getElementById("explorerGrid");

  if (!grid) return;


  const languages =
    getLanguages();


  grid.innerHTML = "";


  languages.forEach(language => {

    if (language.status !== "Published") {
      return;
    }

    addLanguageToStudentExplorer(language);

  });

}


function openLessonCreator() {

  alert(
    "Lesson creator will be connected next."
  );

}
```
```

```javascript
/* ============================= */
/* COURSE BUILDER LOGIC */
/* ============================= */

function getLessons() {

  const saved =
    localStorage.getItem("tutorLessons");

  return saved
    ? JSON.parse(saved)
    : [];

}


function saveLessonsData(lessons) {

  localStorage.setItem(
    "tutorLessons",
    JSON.stringify(lessons)
  );

}


/* OPEN CREATOR */

function openLessonCreator() {

  const language =
    document.getElementById("courseLanguage");

  if (!language.value) {

    alert("Please add a language first.");

    return;

  }


  document.getElementById("lessonBuilder")
    .classList.add("active");

}


/* CLOSE CREATOR */

function closeLessonCreator() {

  document.getElementById("lessonBuilder")
    .classList.remove("active");

}


/* LOAD LANGUAGES */

function loadCourseLanguages() {

  const select =
    document.getElementById("courseLanguage");

  if (!select) return;


  const languages =
    getLanguages();


  select.innerHTML = "";


  languages
    .filter(language => language.status === "Published")
    .forEach(language => {

      const option =
        document.createElement("option");

      option.value =
        language.name;

      option.textContent =
        language.flag +
        " " +
        language.name;

      select.appendChild(option);

    });


  loadLessons();

}


/* LEVEL CHANGE */

function loadCourseLevels() {

  loadLessons();

}


/* ADD VOCABULARY */

function addVocabularyRow() {

  const container =
    document.getElementById("vocabularyRows");


  const row =
    document.createElement("div");

  row.className =
    "vocabulary-row";


  row.innerHTML = `

    <input
      type="text"
      placeholder="Word">

    <input
      type="text"
      placeholder="Meaning">

    <input
      type="text"
      placeholder="Example sentence">

  `;


  container.appendChild(row);

}


/* ADD QUIZ */

function addQuizRow() {

  const container =
    document.getElementById("quizRows");


  const row =
    document.createElement("div");

  row.className =
    "quiz-builder-row";


  row.innerHTML = `

    <input
      type="text"
      placeholder="Question">

    <input
      type="text"
      placeholder="Option A">

    <input
      type="text"
      placeholder="Option B">

    <input
      type="text"
      placeholder="Option C">

    <input
      type="text"
      placeholder="Correct answer">

  `;


  container.appendChild(row);

}


/* SAVE LESSON */

function saveLesson() {

  const language =
    document.getElementById("courseLanguage").value;

  const level =
    document.getElementById("courseLevel").value;

  const title =
    document.getElementById("lessonTitle").value.trim();

  const description =
    document.getElementById("lessonDescription").value.trim();

  const content =
    document.getElementById("lessonContent").value.trim();


  if (!title || !description || !content) {

    alert(
      "Please enter the lesson title, description and content."
    );

    return;

  }


  /* VOCABULARY */

  const vocabulary = [];


  document
    .querySelectorAll("#vocabularyRows .vocabulary-row")
    .forEach(row => {

      const inputs =
        row.querySelectorAll("input");


      if (
        inputs[0].value.trim() ||
        inputs[1].value.trim()
      ) {

        vocabulary.push({

          word:
            inputs[0].value.trim(),

          meaning:
            inputs[1].value.trim(),

          example:
            inputs[2].value.trim()

        });

      }

    });


  /* QUIZ */

  const quiz = [];


  document
    .querySelectorAll("#quizRows .quiz-builder-row")
    .forEach(row => {

      const inputs =
        row.querySelectorAll("input");


      if (inputs[0].value.trim()) {

        quiz.push({

          question:
            inputs[0].value.trim(),

          options: [

            inputs[1].value.trim(),
            inputs[2].value.trim(),
            inputs[3].value.trim()

          ],

          answer:
            inputs[4].value.trim()

        });

      }

    });


  /* LESSON OBJECT */

  const lesson = {

    id:
      Date.now(),

    language:
      language,

    level:
      level,

    title:
      title,

    description:
      description,

    content:
      content,

    vocabulary:
      vocabulary,

    quiz:
      quiz,

    createdAt:
      new Date().toISOString()

  };


  const lessons =
    getLessons();


  lessons.push(lesson);

  saveLessonsData(lessons);


  renderLessons();

  resetLessonBuilder();

  closeLessonCreator();


  alert(
    "Lesson created successfully!"
  );

}


/* RENDER */

function renderLessons() {

  const container =
    document.getElementById("lessonList");

  if (!container) return;


  const language =
    document.getElementById("courseLanguage").value;

  const level =
    document.getElementById("courseLevel").value;


  const lessons =
    getLessons().filter(
      lesson =>
        lesson.language === language &&
        lesson.level === level
    );


  container.innerHTML = "";


  if (!lessons.length) {

    container.innerHTML = `

      <div class="admin-empty">

        <span>📖</span>

        <h3>No lessons yet</h3>

        <p>
          Create the first lesson for this level.
        </p>

      </div>

    `;

    return;

  }


  lessons.forEach((lesson, index) => {

    const item =
      document.createElement("div");

    item.className =
      "lesson-item";


    item.innerHTML = `

      <div class="lesson-number">
        ${index + 1}
      </div>

      <div class="lesson-item-info">

        <strong>
          ${lesson.title}
        </strong>

        <span>
          ${lesson.description}
        </span>

      </div>

      <div class="lesson-item-actions">

        <button
          onclick="previewLesson(${lesson.id})">
          Preview
        </button>

        <button
          onclick="deleteLesson(${lesson.id})">
          Delete
        </button>

      </div>

    `;


    container.appendChild(item);

  });

}


/* LEVEL / LANGUAGE LOAD */

function loadLessons() {

  renderLessons();

}


/* DELETE */

function deleteLesson(id) {

  const confirmed =
    confirm(
      "Delete this lesson?"
    );


  if (!confirmed) return;


  const lessons =
    getLessons().filter(
      lesson =>
        lesson.id !== id
    );


  saveLessonsData(lessons);

  renderLessons();

}


/* PREVIEW */

function previewLesson(id) {

  const lesson =
    getLessons().find(
      item =>
        item.id === id
    );


  if (!lesson) return;


  alert(

    lesson.title +
    "\n\n" +

    lesson.description +
    "\n\n" +

    "Vocabulary: " +
    lesson.vocabulary.length +
    "\n" +

    "Quiz questions: " +
    lesson.quiz.length

  );

}


/* RESET */

function resetLessonBuilder() {

  document.getElementById("lessonTitle").value = "";

  document.getElementById("lessonDescription").value = "";

  document.getElementById("lessonContent").value = "";


  document.getElementById("vocabularyRows").innerHTML = `

    <div class="vocabulary-row">

      <input
        type="text"
        placeholder="Word">

      <input
        type="text"
        placeholder="Meaning">

      <input
        type="text"
        placeholder="Example sentence">

    </div>

  `;


  document.getElementById("quizRows").innerHTML = `

    <div class="quiz-builder-row">

      <input
        type="text"
        placeholder="Question">

      <input
        type="text"
        placeholder="Option A">

      <input
        type="text"
        placeholder="Option B">

      <input
        type="text"
        placeholder="Option C">

      <input
        type="text"
        placeholder="Correct answer">

    </div>

  `;

}


/* INITIALIZE */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    loadCourseLanguages();

  }
);
```
