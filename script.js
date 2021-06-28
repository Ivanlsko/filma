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

const sprievodcaContent = document.querySelector(".sprievodcaContent");
sprievodcaContent.textContent = sprievodcaText[0];


