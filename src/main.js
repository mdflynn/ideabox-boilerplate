var saveButton = document.querySelector(".save-button");
var ideaCardText = document.querySelector(".idea-title");
var ideaBodyText = document.querySelector(".idea-text");
var favoriteIdea = document.querySelector(".favorite-image-unsaved");
var titleInput = document.querySelector("#title-text");
var bodyInput = document.querySelector("#body-text");
var ideaGrid = document.querySelector(".idea-card-grid");
var deleteButton = document.querySelector(".delete-image-unsaved");
var ideaCardDisplaySec = document.querySelector(".idea-cards");
var savedIdeas = [];
var currentIdea ;


ideaGrid.addEventListener("click", handleEvents);
saveButton.addEventListener("click", addIdea);
titleInput.addEventListener("keyup", enableSaveButton);
bodyInput.addEventListener("keyup", enableSaveButton);

function handleEvents(event) {
  event.preventDefault();
  if (event.target.id === "delete-image") {
    deleteIdea(event);
  }
}

function addIdea(event) {
event.preventDefault();
currentIdea = new Idea(titleInput.value , bodyInput.value);
savedIdeas.push(currentIdea);
displayNewIdea(currentIdea);
clearInputs();
}

function displayNewIdea(currentIdea) {

     ideaGrid.insertAdjacentHTML("afterbegin",
     `<article class="one-idea-card" id="${currentIdea.id}">
    <div class="idea-card-header">
      <img class="favorite-image-unsaved" src="./assets/star.svg" height="25" width="25">
      <img class="delete-image-unsaved" src="./assets/delete.svg" id="delete-image" height="25" width="25">
    </div>
    <div class="idea-card-body">
      <p class="idea-title">${currentIdea.title}</p>
      <p class="idea-text">${currentIdea.body}</p>
    </div>
    <div class="idea-card-footer">
      <img class="comment-image" src="./assets/comment.svg" height="25" width="25">
      <p class="idea-comments">Comment</p>
    </div>
  </article>`
  )
}

function clearInputs() {
  document.getElementById("title-text").value = "";
  document.getElementById("body-text").value = "";
}

function enableSaveButton() {
  if (titleInput.length !== 0 && bodyInput.length !== 0) {
    saveButton.disabled = false;
    saveButton.style.opacity = 1;
  } else {
    disableSaveButton();
  }
}

function disableSaveButton() {
    saveButton.disabled = true;
    saveButton.style.opacity = 0.5;
}

function deleteIdea(event) {
  event.target.closest(".one-idea-card").remove();
  }
