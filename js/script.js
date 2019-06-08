"use strict";

//    -----------------  Слайдер ---------------------------------

var currentItem = null;
var iceCreamItemElements = document.querySelectorAll(".ice-cream__item");
var sliderElement = document.querySelector(".slider");

function changeSlider (elem) {
  var sliderBtnElements = document.querySelectorAll(".slider__btn");
  var body = document.body;

  for (var i = 0; i < sliderBtnElements.length; i++) {
    sliderBtnElements[i].classList.remove("active");
  }

  body.className = elem.dataset.iceCream;
  elem.classList.add("active");

  for (var j = 0; j < iceCreamItemElements.length; j++) {
    var iceCreamItemElement = iceCreamItemElements[j];
    if (iceCreamItemElement.dataset.iceCream === elem.dataset.iceCream) {
      iceCreamItemElement.classList.remove("hidden");
      currentItem = iceCreamItemElement;
      continue;
    }
    iceCreamItemElement.classList.add("hidden");
  }
}

function createAnimation () {
  var imgElement = currentItem.querySelector("img");
  imgElement.classList.add("slider-animation");
}



sliderElement.addEventListener("click", function (event) {
  var target = event.target;

  if (!target.classList.contains("slider__btn") || target.classList.contains("active")) {
    return;
  }

  changeSlider(target);
  createAnimation();
  currentItem = null;
});


// -------------------- Выпадающее окно ---------------------------------

var feedbackLinkElement = document.querySelector(".feedback__link");
var modalFeedbackElement = document.querySelector(".modal-feedback");
var modalWrapperElement = document.querySelector(".modal-wrapper");

feedbackLinkElement.addEventListener("click", function (event) {
  event.preventDefault();

  modalFeedbackElement.classList.remove("hidden");
  modalWrapperElement.classList.add("overlay");
  modalFeedbackElement.classList.add("modal-animation");

});

document.addEventListener("click", function (event) {
  var target = event.target;
  if (target.classList.contains("js-remove")) {
    modalWrapperElement.classList.remove("overlay");
    target.parentNode.classList.add("hidden");
  }
});
