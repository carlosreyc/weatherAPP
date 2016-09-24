$(document).ready(function() {

  $("#getQuote").on("click", function(){


    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
$("#message").html(json.quoteText + "<br> " + json.quoteAuthor);
console.log(json.quoteText);
});


  });

});
/*
$(document).ready(function() {

function parseQuote(response)
{
document.getElementById("quote").innerHTML = response.quoteText;
document.getElementById("author").innerHTML = response.quoteAuthor;
}



  $("#getQuote").on("click", function(){

//http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en
    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
$(".message").html(JSON.stringify(json));
});


  });

});

*/
