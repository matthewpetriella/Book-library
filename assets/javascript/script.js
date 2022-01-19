// modal selector
var modal = document.querySelector(".modal");

 //Get the button that opens the modal
var openBtn = document.querySelector("#nysearch");

//Get the button that opens the modal
var nonFictinoalBtn = document.querySelector("#nySearchNfictional");

// Get the  element that closes the modal
var bookBtn = document.querySelector(".book-search")

// get modal cancel button
var cancelBtn = document.querySelector(".cancel-search");

// defining  variables
var fictionalList = document.querySelector("#fiction-list");

var nFictionalList = document.querySelector("#nonfictional-list");

var changeGenreBtn = document.getElementById("genre-trigger");

 var buttonZero = document.querySelector(".button-0");

// API Key
var bookAPI= "D9OwWTZWlrbbFIzrqzKyzY9zxhC4MVua";
var youtubeAPIKey = "AIzaSyCnm1Vk0t1Po9Fanm2-OIFvOP4HzN4SUCM";

function getResult(booklist) {
  

  for (var i=0; i < booklist.length; i++){
    booklist[i].addEventListener("click", getVideo);
  }

};


changeGenreBtn.addEventListener("click", function(){
  reload = location.reload();
});


function getApi() {
  modal.style.display = "none"
  var requestUrl = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=" + bookAPI;
  fetch(requestUrl)
  .then(function(response) {
    console.log (response)
    return response.json();
  })
  .then(function(data) {
    console.log (data)
    for (var i = 0; i < 5; i++) {
     var author = document.createElement('a');
      author.textContent = data.results.lists[0].books[i].author + ":  " + data.results.lists[0].books[i].title;
      author.setAttribute("position", i.toString());
      author.setAttribute("id", "book-Element_" + i);
      author.classList.add("searchBtn");
      author.classList.add("p-2");
      fictionalList.appendChild(author); 
        
      var booklist = document.querySelectorAll(".booklist > a");
    getResult(booklist);
    }
    
  });


};


function getApi2() {
  modal.style.display = "none"
  var requestUrl = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=" + bookAPI;
  fetch(requestUrl)
  .then(function(response) {
    console.log (response)
    return response.json();
  })
  .then(function(data) {
    console.log (data)
    for (var i = 0; i < 5; i++) {
     var nauthor = document.createElement('a');
      nauthor.textContent = data.results.lists[1].books[i].author + ": " + data.results.lists[1].books[i].title;
      nauthor.setAttribute("position", i.toString());
      nauthor.setAttribute("id", "book-Element_" + i);
      nauthor.classList.add("p-2");
      nFictionalList.appendChild(nauthor); 

       
    }
    var booklist = document.querySelectorAll(".booklist > a");
    getResult(booklist);
  });
  
  
};


//Api call to display youtube video
//source: https://dev.to/aveb/making-your-first-get-request-to-youtube-search-api-4c2f
function getVideo(event) {
  var searchResult = document.getElementById(event.target.id);
  document.getElementById("video-box").classList.remove("hidevideo-box");  

  $.ajax({
    type: `GET`,
    url: `https://www.googleapis.com/youtube/v3/search`,
    data: {
        key: `AIzaSyCnm1Vk0t1Po9Fanm2-OIFvOP4HzN4SUCM`,
        //this “q” is where we need to search our li <title> + “book review”
        q: searchResult.text + " review",
        part: `snippet`,
        maxResults: 1,
        type: `video`,
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
  });
  
}
//replaces placeholder video with updated title and description
function embedVideo(data) {
  $(`iframe`).attr(`src`, `https://www.youtube.com/embed/` + data.items[0].id.videoId)
  $(`h3`).text(data.items[0].snippet.title)
  $(`.description`).text(data.items[0].snippet.description)
}



var search = {};

// // When the user clicks the button, open the modal
openBtn.addEventListener('click', getApi);

// 
nonFictinoalBtn.addEventListener('click', getApi2);

