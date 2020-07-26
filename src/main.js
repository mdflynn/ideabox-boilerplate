var saveButton = document.querySelector(".save-button");
var ideaCardText = document.querySelector(".idea-title");
var ideaBodyText = document.querySelector(".idea-text");
var favoriteIdea = document.querySelector(".favorite-image-unsaved");

// var savedIdeas = [];

idea = new Idea(title, body)

saveButton.addEventListener("click", addInput);
favoriteIdea.addEventListener("click",saveIdea);

function addInput() {
  var titleInput = document.querySelector("#title-text").value;
  var bodyInput = document.querySelector("#body-text").value;
  titleInput.innerText = ideaCardText;
  bodyInput.innerText = ideaBodyText;
}

function saveIdea() {
  document.getElementsByClassName(".favorite-image-unsaved").src="./assets/star-active.svg";
  savedIdeas.push()
}
