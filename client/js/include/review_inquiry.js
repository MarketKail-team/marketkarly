import { getNode } from './../../lib/index.js';


// const reviewButton = getNode('.product-review__header__button');
// const reviewCancelButton = getNode('.popupForm__button-cancel');

// function reviewHandler(){
//   console.log('1');
// }

// reviewButton.addEventListener('click', reviewHandler);

const reviewBtnOpen = getNode('.product-review__header__button');
const modalReview = getNode('.product-review-popup');
const reviewBtnClose = getNode('.review-popupForm__button-cancel');

const inquirtBtnOpen = getNode('.product-inquiry__header__button');
const modalInquiry = getNode('.product-inquiry-popup');
const inquiryBtnClose = getNode('.inquiry-popupForm__button-cancel');


function modalReviewOn() {
  modalReview.style.display = 'flex'
}

function isModalReviewOn() {
  return modalReview.style.display === 'flex'
}

function modalReviewOff() {
  modalReview.style.display = 'none'
}

function modalInquiryOn() {
  modalInquiry.style.display = 'flex'
}

function isModalInquiryOn() {
  return modalInquiry.style.display === 'flex'
}

function modalInquiryOff() {
  modalInquiry.style.display = 'none'
}

reviewBtnOpen.addEventListener('click', e => {
  modalReviewOn()
})

reviewBtnClose.addEventListener('click', e => {
  modalReviewOff()
})

modalReview.addEventListener('click', e => {
  const evTarget = e.target
  if(evTarget.classList.contains('product-review-popup')) {
    modalReview.style.display = 'none'
  }
})

window.addEventListener('keyup', e => {
  if(isModalReviewOn() && e.key === 'Escape') {
    modalInquiryOff()
  }
}) 

inquirtBtnOpen.addEventListener('click', e => {
  modalInquiryOn()
})

inquiryBtnClose.addEventListener('click', e => {
  modalInquiryOff()
})

modalInquiry.addEventListener('click', e => {
  const evTarget = e.target
  if(evTarget.classList.contains('product-inquiry-popup')) {
    modalInquiry.style.display = 'none'
  }
})

window.addEventListener('keyup', e => {
  if(isModalInquiryOn() && e.key === 'Escape') {
    modalReviewOff()
  }
}) 

