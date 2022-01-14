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

//books api start
//source: https://developer.nytimes.com/docs/books-product/1/routes/lists/overview.json/get
var getBooksList = function(books) {
    //overview endpoint will list Top 5 books for all Best Sellers lists
    var apiUrl = "https://api.nytimes.com/svc/books/v3/lists/overview.json";
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displayBooks(data, books);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) {
        alert("Unable to connect to NY Times");
      });
};

//youtube api start
//source: https://developers.google.com/youtube/iframe_api_reference?hl=en_US
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            'playsinline': 1
        },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
        });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}

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