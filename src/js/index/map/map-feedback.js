/*
let feedbackArea = document.querySelector(".feedback");
let feedbackBtn = document.querySelector(".map__button-feedback");
let feedbackBtnClose = document.querySelector(".feedback__close");

feedbackBtn.addEventListener('click', showFeedbackModal);
document.body.addEventListener('keydown', hiddenFeedbackModal);
feedbackBtnClose.addEventListener('click', hiddenFeedbackButton)

// function hiddenFeedbackModal(event) {
// 	event.preventDefault();
// 	if (event.keyCode === 27) {
// 		feedbackArea.classList.add("visually-hidden");
// 	};
// }

function hiddenFeedbackButton(event) {
	event.preventDefault();
	feedbackArea.classList.add("visually-hidden");
}

function showFeedbackModal(event) {
	event.preventDefault();
	feedbackArea.classList.remove("visually-hidden");
}
*/

$(document).ready(function() {
  $('.map__button-feedback').on('click', function(e) {
    e.preventDefault();
    $('.feedback').fadeIn(500);
  });

  $('.feedback__close, .feedback__fade').on('click', function(e) {
    e.preventDefault();
    $('.feedback').fadeOut(300);
  });

  $(this).keydown(function(event) {
    if (event.which == 27) $('.feedback').fadeOut();
  });
});
