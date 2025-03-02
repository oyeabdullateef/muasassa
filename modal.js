var modal = document.getElementById("myModal");
var triggerModal = document.getElementsByClassName(".trigger-modal")[0];
var closeButton = document.getElementsByClassName(".close")[0];

triggerModal.onClick = function () {
  modal.style.display = "block";
};

closeButton.onClick = function () {
  modal.style.display = "none";
};

window.onClick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
