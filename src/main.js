var saveButton = document.querySelector(".save-button");
var ideaCardText = document.querySelector(".idea-title");
var ideaBodyText = document.querySelector(".idea-text");
var favoriteIdea = document.querySelector(".favorite-image-unsaved");
var titleInput = document.querySelector("#title-text");
var bodyInput = document.querySelector("#body-text");
var ideaGrid = document.querySelector(".idea-card-grid");
var deleteButton = document.querySelector(".delete-image-unsaved");
var savedIdeas = [];
var currentIdea ;


favoriteIdea.addEventListener("click", addIdea);
saveButton.addEventListener("click", addIdea);
ideaGrid.addEventListener("click", deleteIdea);
titleInput.addEventListener("keyup", enableSaveButton);
bodyInput.addEventListener("keyup", enableSaveButton);

function addIdea() {
  console.log("hi");
  var one = titleInput.value;
  var two = bodyInput.value;
  one.innerText = title;
  two.innerText = body;
  currentIdea = new Idea(one.innerText, two.innerText);
  savedIdeas.push(currentIdea);
  console.log(savedIdeas);
}

function saveIdea(event) {
    event.preventDefault()
    var ideaData = "";
      for (var i = 0; i < savedIdeas.length; i++) {
     ideaData += `<article class="one-idea-card" id="${savedIdeas[i].id}">
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
  </article>`;

  // if (titleInput.value !== "" && bodyInput.value !== "") {

     } ideaGrid.innerHTML += ideaData;
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

function deleteIdea(event) {
  var findIdea = event.target.closest(".idea-cards");
  var removeIdea = event.target.id;
  for(var i = 0; i < ideaGrid.length; i++) {
    if (ideaGrid[i].id == removeIdea) {
      ideaGrid.splice(i, 1);
    }
    saveIdea();

  }
}
