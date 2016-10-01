$(document).ready(function(){

  $.getJSON('http://ipinfo.io?callback=?', function(data){

    var coords = data.country.toLowerCase();
    var tempK = 0;
    var tempC = 0;
    var CtoF = 0;
    var FtoC = 0;
    var flag = 0;
    var text = '';

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip='+data.postal+','+coords+'&APPID=d727f82db95a90f0f8909e62320acf9b&',function(json){
      tempK = json.main.temp - 273.15;
      tempC = Math.round( tempK * 10 ) / 10;


      $("div.city").html(data.city +","+ json.sys.country);
      $("div.weather").html(json.weather[0].description);
      $("div.temp").html(tempC);


      if(json.weather[0].main == 'Clouds') {
         //$("html").css("background", "url(https://s9.postimg.org/kzi2pr2e7/image.jpg) no-repeat center ");
         $("#bg").attr("src","https://s9.postimg.org/kzi2pr2e7/image.jpg");

      } else if (json.weather[0].main == 'Rain') {
        $("#bg").attr("src","https://s25.postimg.org/bjfef6bdb/3.jpg");
        //$("html").css("background", "url(https://s9.postimg.org/qq893hae7/image.jpg) no-repeat center ");
      }

      $("p.transform").click(function(){
        text = $("p.transform").text();

        if(text === '°C') {
          flag = (tempC * 1.8) + 32;
          CtoF = Math.round(flag * 10) / 10;
          $("div.temp").html(CtoF);
          $("p.transform").html('°F');
        } else if(text === '°F') {
          flag = (CtoF - 32) / 1.8;
          FtoC = Math.round(flag * 10) / 10;
          $("div.temp").html(FtoC);
          $("p.transform").html('°C');
        }


      });

    });
  });


});
