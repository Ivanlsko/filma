const sprievodcaText = [
  "prvy subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  "druhy subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  "treti subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  "stvrty subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
];

window.addEventListener("load", logIt);

function logIt() {
  console.log(sprievodcaText);
}

const btnSprievodca = document.querySelector(".btnSprievodca");
const sprievodca = document.querySelector(".sprievodca");

btnSprievodca.addEventListener("click", openSprievodca);

function openSprievodca() {
  sprievodca.classList.toggle("hidden");
}
/*<---------- slideshow --------->*/

const sprievodcaContent = document.querySelector(".sprievodcaContent");
let position = 0;
sprievodcaContent.textContent = sprievodcaText[position];

const next = document.querySelector(".nextPos");
const back = document.querySelector(".backPos");

next.addEventListener("click", nextPos);

function nextPos() {
  sprievodcaContent.textContent = sprievodcaText[position + 1];
  position = position + 1;
};

back.addEventListener("click", backPos);

function backPos() {
  sprievodcaContent.textContent = sprievodcaText[position - 1];
  position = position - 1;
}
