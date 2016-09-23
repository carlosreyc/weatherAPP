$(document).ready(function() {

  $("#getQuote").on("click", function(){


    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en", function(json) {
$("#quotes").html(JSON.stringify(json));
});


  });

});
