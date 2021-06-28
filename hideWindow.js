window.addEventListener("load", (hideWindow) => {
  console.log("I am workin");
  const iFrame = document.getElementById("frameCall");
  var elmnt = iFrame.contentWindow.document.getElementById("user-video");
  elmnt.style.display = "none";
});
