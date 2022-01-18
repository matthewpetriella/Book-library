// modal selector
var modal = document.querySelector(".modal");

 //Get the button that opens the modal
var openBtn = document.querySelector(".nysearch");

// Get the  element that closes the modal
var bookBtn = document.querySelector(".book-search")

// get modal cancel button
var cancelBtn = document.querySelector(".cancel-search");

// defining variables
var bookList = document.querySelector('ul');
var fetchButton = document.getElementById('bestsellerbtn');

// API Key
var bookAPI= "D9OwWTZWlrbbFIzrqzKyzY9zxhC4MVua"
var youtubeAPI = "AIzaSyDLwFd4zYweemWMyBrFsyroycgBQVZWCmw"




// modal.addEventListener('load', function(){
//    modal.style.display = "block"
// });

//When the user clicks the cancel button, close the modal
cancelBtn.addEventListener('click', function (){
modal.style.display = "none"

});

// When the modal search button is clicked run Save search function

// bookBtn.addEventListener('click', function(event,userSearch){
//     event.preventDefault();

// var userSearch = $(`#title`).val();   

//     localStorage.setItem("book", userSearch);
    
// }); 


function getApi() {
  var requestUrl = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=" + bookAPI;
  fetch(requestUrl)
  .then(function(response) {
    console.log (response)
    return response.json();
  })
  .then(function(data) {
    console.log (data)
    for (var i = 0; i < 5; i++) {
     var listItem = document.createElement('li');
      listItem.textContent = data.results.lists[0].books[i].title;
      bookList.appendChild(listItem);

      var author = document.createElement('p');
      author.textContent = data.results.lists[0].books[i].author;
      listItem.appendChild(author);
    }
  });
};


var search = {};

// // When the user clicks the button, open the modal
openBtn.addEventListener('click', getApi);
