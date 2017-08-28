/*
var url = "http://api.icndb.com/jokes/random";
setTimeout(getJoke, 50);
var button = document.getElementById("get-joke");
button.addEventListener("click", function() {
  getJoke();
});
var paragraph = document.getElementById("joke");
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", function() {
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}
*/
//excercise 12.5 Ajax jquery
var prefix = "https://cors-anywhere.herokuapp.com/";
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
var quotelist = $('#quote-list');
var quotes = 0;


function getQuote() {
  $.getJSON(prefix + quoteUrl, createTweet);
  $.ajaxSetup({
    cache: false
  });
}

function createTweet(input) {
  var data = input[0];

  var quoteText = $(data.content).text().trim();
  var quoteAuthor = data.title;

  if (!quoteAuthor.length) {
    quoteAuthor = "Unknown author";
  }
  0
  var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;
  if (tweetText.length > 140) {
    getQuote();
  } else {
    var tweet = tweetLink + encodeURIComponent(tweetText);
    $('.quote').text(quoteText);
    $('.author').text("Author: " + quoteAuthor);
    $('.tweet').attr('href', tweet);
    $('<li>').text(quoteText).appendTo(quotelist);
  }
}

function quotes_number() {
  var quotes = $('#number-of-quotes').val();
}

$(document).ready(function () {
  getQuote();
  $('.trigger').click(function (quotes_number) {
    for (var index = 0; index < quotes; index++) {
      getQuote();
    }
  })
});