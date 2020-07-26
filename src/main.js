var saveButton = document.querySelector(".save-button");
var ideaCardText = document.querySelector(".idea-title");
var ideaBodyText = document.querySelector(".idea-text");

idea = new Idea(title, body)

saveButton.addEventListener("click", addInput);

function addInput() {
  var titleInput = document.querySelector("#title-text").value;
  var bodyInput = document.querySelector("#body-text").value;
  titleInput.innerText = ideaCardText;
  bodyInput.innerText = ideaBodyText;
}
