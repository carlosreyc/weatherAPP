$(document).ready(function() {


  $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
$("#quote").html(json.quoteText + "<footer>" + json.quoteAuthor + "</footer>");

$("blockquote").css({"background-color": "#FFF", "border-left": "5px solid #CCC"});
$("blockquote::before").css({"color": "#CCC"});
});
$.ajaxSetup({ cache: false });
  $("#getQuote").on("click", function(){


    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
$("#quote").html(json.quoteText + "<br> " + json.quoteAuthor);
$("blockquote").css({"background-color": "#FFF", "border-left": "5px solid #CCC"});
$("blockquote::before").css({"color": "#CCC"});
  /*$("#Tweet").on("click", function()) {

  });*/
$.ajaxSetup({ cache: false });
});


  });

});
