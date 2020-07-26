var saveButton = document.querySelector(".save-button");
var ideaCardText = document.querySelector(".idea-title");
var ideaBodyText = document.querySelector(".idea-text");
var favoriteIdea = document.querySelector(".favorite-image-unsaved");
var titleInput = document.querySelector("#title-text");
var bodyInput = document.querySelector("#body-text");
var ideaGrid = document.querySelector(".idea-card-grid");

// var savedIdeas = [];


favoriteIdea.addEventListener("click", addInput);
saveButton.addEventListener("click",saveIdea);

function addInput() {
  titleInput.value;
  bodyInput.value;
  titleInput.innerText = ideaCardText;
  bodyInput.innerText = ideaBodyText;
}

function saveIdea() {
  var newIdea = `<article class="one-idea-card">
    <div class="idea-card-header">
      <img class="favorite-image-unsaved" src="./assets/star-active.svg" height="25" width="25">
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
  ideaGrid.innerHTML += newIdea
  // savedIdeas.push()
}
