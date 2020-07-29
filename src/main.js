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


// favoriteIdea.addEventListener("click", addIdea);
saveButton.addEventListener("click", addIdea);
// ideaGrid.addEventListener("click", deleteIdea);
titleInput.addEventListener("keyup", enableSaveButton);
bodyInput.addEventListener("keyup", enableSaveButton);

function addIdea(event) {
event.preventDefault();
currentIdea = new Idea(titleInput.value , bodyInput.value);
savedIdeas.push(currentIdea);
ideaCardText.innerText = currentIdea.title;
ideaBodyText.innerText = currentIdea.body;
displayNewIdea();
clearInputs();
}

function displayNewIdea(currentIdea) {

    ideaGrid.innerHTML = "";
      for (var i = 0; i < savedIdeas.length; i++) {
     ideaGrid.innerHTML +=
     `<article class="one-idea-card" id="${savedIdeas[i].id}">
    <div class="idea-card-header">
      <img class="favorite-image-unsaved" src="./assets/star.svg" height="25" width="25">
      <img class="delete-image-unsaved" src="./assets/delete.svg" id="delete-image" height="25" width="25">
    </div>
    <div class="idea-card-body">
      <p class="idea-title">${savedIdeas[i].title}</p>
      <p class="idea-text">${savedIdeas[i].body}</p>
    </div>
    <div class="idea-card-footer">
      <img class="comment-image" src="./assets/comment.svg" height="25" width="25">
      <p class="idea-comments">Comment</p>
    </div>
  </article>`
  }
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
