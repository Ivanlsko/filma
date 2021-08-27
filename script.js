const sprievodcaText = [
  "prvy subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  "druhy subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  "treti subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
  "stvrty subor detailnejsich usmernujucich pokynov pre stredne pokrocilych pouzivatelov",
];

const sprievodcaContent = document.querySelector(".sprievodcaContent");
let position = 0;
const next = document.querySelector(".nextPos");
const back = document.querySelector(".backPos");
let backIsHidden = false;
let nextIsHidden = false;
const btnSprievodca = document.querySelector(".btnSprievodca");
const sprievodca = document.querySelector(".sprievodca");
const podpora = document.querySelector(".podpora");
const btnPodpora = document.querySelector(".btnPodpora");

/*<---------- sprievodca opener--------->*/

btnSprievodca.addEventListener("click", openSprievodca);

function openSprievodca() {
  if (backIsHidden == false) {
    back.classList.add("hidden");
    backIsHidden = true;
  }
  sprievodca.classList.toggle("hidden");
  document.querySelector("#pos0").classList.toggle("positionFull");
}

/*<---------- slideshow --------->*/

sprievodcaContent.textContent = sprievodcaText[position];

next.addEventListener("click", nextPos);
back.addEventListener("click", backPos);
function nextPos() {
  sprievodcaContent.textContent = sprievodcaText[position + 1];
  document.querySelector("#pos" + position).classList.remove("positionFull");
  position = position + 1;
  document.querySelector("#pos" + position).classList.add("positionFull");
  if (position > 0) {
    back.classList.remove("hidden");
  }
  if (position == 3) {
    next.classList.add("hidden");
    nextIsHidden = true;
  }
}

function backPos() {
  sprievodcaContent.textContent = sprievodcaText[position - 1];
  document.querySelector("#pos" + position).classList.remove("positionFull");
  position = position - 1;
  document.querySelector("#pos" + position).classList.add("positionFull");
  if (position == 0) {
    back.classList.add("hidden");
    backIsHidden = true;
  }

  if (nextIsHidden == true) {
    next.classList.remove("hidden");
    nextIsHidden = false;
  }
}

/*<---------- podpora opener--------->*/

btnPodpora.addEventListener("click", openPodpora);

function openPodpora() {
  podpora.classList.toggle("hidden");
}
