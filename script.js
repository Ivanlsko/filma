/* const sprievodcaText = [
  "prvy subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  "druhy subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  "treti subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  "stvrty subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
]; */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", determineBtn);
});

function determineBtn() {
  //console.log(this);
  if (this.innerText == "sprievodca") {
    sprievodca();
    manageContent();
  }

  if (this.innerText == "nahrať") {
    nahrať();
  }

  if (this.innerText == "podpora") {
    podpora();
  }
}

// Buttons functions
function sprievodca() {
  console.log("sprievodca function");
}

function nahrať() {
  console.log("nahrať function");
}

function podpora() {
  console.log("podpora function");
}

// Content management functions

function manageContent() {
  clearCon();
  arrangeBtns();
}

function clearCon() {
  //remove all the stuff
  const header = document.querySelector("header");
  header.children[1].style.visibility = "hidden";
  header.children[2].style.visibility = "hidden";

  //change BG color - CSS animation
  document.querySelector("#secondaryBg").classList.add("blackToGreen");
}

function arrangeBtns() {
  //arange the btns (use absolute on btn and margin-left: -30vw on #buttons)

  //after arranging the buttons show to the close button
  setTimeout(showCloseBtn, 3000);
}

function showCloseBtn() {
  console.log("currentEnd");
}
