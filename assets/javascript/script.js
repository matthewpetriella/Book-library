// modal selector
var modal = document.querySelector(".modal");

 //Get the button that opens the modal
var openBtn = document.querySelector(".js-modal-trigger");

// Get the  element that closes the modal
var bookBtn = document.querySelector(".book-search")

// get modal cancel button
var cancelBtn = document.querySelector(".cancel-search")

// When the user clicks the button, open the modal
openBtn.addEventListener('click', function(){
   modal.style.display = "block"
});
// When the user clicks the cancel button, close the modal
cancelBtn.addEventListener('click', function(){
    modal.style.display = "none"
});

// When the modal search button is clicked run Save search function

bookBtn.addEventListener('click', function(event,userSearch){
    event.preventDefault();
    var userSearch = $(`#title`).val();

    localStorage.setItem("book", userSearch);
    
}); 
  

// user input array
var search = {};

// var saveSearch = function () {
// var userSearch = $(`#title`).val();


//     localStorage.setItem("book", userSearch);
//     console.log(localStorage);
// };


// document.addEventListener('DOMContentLoaded', () => {
//     // Functions to open and close a modal
//     function openModal($el) {
//       $el.classList.add('is-active');
//     }
//     function closeModal($el) {
//       $el.classList.remove('is-active');
//     }
//     function closeAllModals() {
//       (document.querySelectorAll('.modal') || []).forEach(($modal) => {
//         closeModal($modal);
//       });
// //     }
//     // Add a click event on buttons to open a specific modal
//     (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
//       const modal = $trigger.dataset.target;
//       const $target = document.getElementById(modal);
//       console.log($target);
//       $trigger.addEventListener('click', () => {
//         openModal($target);
//       });
//     });
//     // Add a click event on various child elements to close the parent modal
//     (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
//       const $target = $close.closest('.modal');
//       $close.addEventListener('click', () => {
//         closeModal($target);
//       });
//     });
//     // Add a keyboard event to close all modals
//     document.addEventListener('keydown', (event) => {
//       const e = event || window.event;
//       if (e.keyCode === 27) { // Escape key
//         closeAllModals();
//       }
//     });
//   });