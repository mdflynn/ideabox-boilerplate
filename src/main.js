var saveButton = document.querySelector(".save-button");
var ideaCardText = document.querySelector(".idea-title");
var ideaBodyText = document.querySelector(".idea-text");
var favoriteIdea = document.querySelector(".favorite-image-unsaved");
var titleInput = document.querySelector("#title-text");
var bodyInput = document.querySelector("#body-text");
var ideaGrid = document.querySelector(".idea-card-grid");
// var savedIdeas = [];

favoriteIdea.addEventListener("click", addInput);
saveButton.addEventListener("click", saveIdea);
titleInput.addEventListener("keyup", enableSaveButton);
bodyInput.addEventListener("keyup", enableSaveButton);

function addInput() {
  titleInput.value;
  bodyInput.value;
  titleInput.innerText = ideaCardText;
  bodyInput.innerText = ideaBodyText;
  var currentIdea = new Idea(titleInput.value, bodyInput.value);
}

function saveIdea(event) {
    event.preventDefault()
    var newIdea = `<article class="one-idea-card">
    <div class="idea-card-header">
      <img class="favorite-image-unsaved" src="./assets/star.svg" height="25" width="25">
      <img class="delete-image-unsaved" src="./assets/delete.svg" height="25" width="25">
    </div>
    <div class="idea-card-body">
      <p class="idea-title">${titleInput.value}</p>
      <p class="idea-text">${bodyInput.value}</p>
    </div>
    <div class="idea-card-footer">
      <img class="comment-image" src="./assets/comment.svg" height="25" width="25">
      <p class="idea-comments">Comment</p>
    </div>
  </article>`;

  if (titleInput.value !== "" && bodyInput.value !== "") {
      ideaGrid.innerHTML += newIdea;
    }
  clearInputs()
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
    disableSaveButton()
  }
}

function disableSaveButton() {
    saveButton.disabled = true;
    saveButton.style.opacity = 0.5;
}
