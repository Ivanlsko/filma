const buttons = document.querySelectorAll(".btn");
const header = document.querySelector("header");

/* let vHeight = window.innerHeight;
console.log(vHeight);
let vWidth = `(${vHeight} / 9) * 16`;
console.log(vWidth); */

window.addEventListener("DOMContentLoaded", init);

function init() {
  let height = window.innerHeight;
  let width = window.innerWidth;
  console.log(height, width);
  window.addEventListener("resize", () => {
    height = window.innerHeight;
    width = window.innerWidth;
    console.log(height, width);
  });
}

/* document.querySelector("#frameCall").style.width = `(${vHeight} / 9) * 16`;
 */
buttons.forEach((button) => {
  button.addEventListener("click", determineBtn);
});

function determineBtn() {
  if (this.innerText == "zavrieť") {
    zavrieť();
    return;
  }
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
  const sprievodcaText = [
    "prvy subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
    "druhy subor usmernujucich pokynov pre pokrocilych pouzivatelov",
    "treti subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
    "stvrty subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  ];
  console.log("sprievodca function");
  //display grid to allow further formating
  document.querySelector("#sprievodcaContent").style.display = "grid";
  const textHolder = document.querySelector("#sprievodcaText");
  //Slider
  let currentPos = 0;
  const positions = document.querySelectorAll(".position");
  textHolder.innerHTML = sprievodcaText[currentPos];
  document.querySelector("#back").style.visibility = "hidden";

  //Back
  document.querySelector("#back").addEventListener("click", () => {
    positions[currentPos].classList.toggle("filled");
    currentPos--;
    positions[currentPos].classList.toggle("filled");
    textHolder.innerHTML = sprievodcaText[currentPos];
    if (currentPos < 1) {
      document.querySelector("#back").style.visibility = "hidden";
    }
    if (currentPos < 2) {
      document.querySelector("#next").style.visibility = "unset";
    }
  });

  //Next
  document.querySelector("#next").addEventListener("click", () => {
    positions[currentPos].classList.toggle("filled");
    currentPos++;
    positions[currentPos].classList.toggle("filled");
    textHolder.innerHTML = sprievodcaText[currentPos];
    if (currentPos > 2) {
      document.querySelector("#next").style.visibility = "hidden";
    }
    if (currentPos > 0) {
      document.querySelector("#back").style.visibility = "unset";
    }
  });
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
  console.log("zavriet function");
  document.querySelector("#secondaryBg").classList.remove("blackToGreen");
  document.querySelector(".btnZavriet").classList.remove("opacityOne");

  header.children[1].style.visibility = "visible";
  header.children[2].style.visibility = "visible";
  header.children[3].style.visibility = "visible";
  header.children[1].style.display = "block";
  header.children[2].style.display = "block";
  header.children[3].style.display = "grid";
  document.querySelector(".btnSprievodca").classList.remove("rightToLeftSprievodca");
  document.querySelector(".btnNahrat").classList.remove("rightToLeftNahrat");
}

// Content management functions

function manageHeaderContent() {
  console.log("manageHeaderContent");
  clearHeaderCon();
  arrangeBtns();
}

function clearHeaderCon() {
  console.log("clearHeaderCon");

  //remove all the stuff

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
