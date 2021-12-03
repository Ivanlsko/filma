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
  secHeaderContentDisplayNone();

  console.log(this.innerText);
  if (this.innerText == "sprievodca") {
    sprievodca();
  }

  if (this.innerText == "nahrať") {
    nahrať();
  }

  if (this.innerText == "podpora") {
    console.log("podmienka podpora");
    podpora();
  }

  if (this.innerText == "zavrieť") {
    zavrieť();
  }
  manageHeaderContent();
}

function secHeaderContentDisplayNone() {
  const childrens = document.querySelector("#secondaryBg").children;
  // used "for" instead of forEach bechause of HTMLcollection
  for (let i = 0; i < childrens.length; i++) {
    console.log(childrens[i]);
    childrens[i].style.display = "none";
  }
}

// Buttons functions
function sprievodca() {
  console.log("sprievodca function");
}

function nahrať() {
  console.log("nahrať function");
  document.querySelector("#nahratContent").style.display = "block";
}

function podpora() {
  console.log("podpora function");
  document.querySelector("#podporaContent").style.display = "block";
}

function zavrieť() {
  console.log("podpora function");
}

// Content management functions

function manageHeaderContent() {
  clearHeaderCon();
  arrangeBtns();
}

function clearHeaderCon() {
  //remove all the stuff
  const header = document.querySelector("header");
  //make it hidden so it doesnt mess with layout
  header.children[1].style.visibility = "hidden";
  header.children[2].style.visibility = "hidden";
  //make the content elements display none - to allow formating of the new content
  setTimeout(hiddenToNone(header), 300);

  //change BG color - CSS animation
  document.querySelector("#secondaryBg").classList.add("blackToGreen");
}

function arrangeBtns() {
  //arange the btns (use absolute on btn and margin-left: -30vw on #buttons)
  document.querySelector("#buttons").classList.add("opacityZero");
  document.querySelector(".btnSprievodca").classList.add("rightToLeftSprievodca");
  document.querySelector(".btnNahrat").classList.add("rightToLeftNahrat");

  //after arranging the buttons show to the close button
  setTimeout(showCloseBtn, 200);
}

function showCloseBtn() {
  console.log("currentEnd");
  document.querySelector(".btnZavriet").classList.add("opacityOne");
}

function hiddenToNone(parent) {
  parent.children[1].style.display = "none";
  parent.children[2].style.display = "none";
  parent.children[3].style.display = "none";
}
