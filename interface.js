$(document).ready(function() {

  var thermostat = new Thermostat()
  updateTemperature()

  $("#temperature-up").click(function() {
    thermostat.up();
    updateTemperature();
    sendTemperature();
  })

  $("#temperature-down").click(function() {
    thermostat.down();
    updateTemperature();
    sendTemperature();
  })

  $("#temperature-reset").click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $("#powersaving-on").click(function() {
    thermostat.switchPowerSaveOn();
    $("#power-saving-status").text("On")
  })

  $("#powersaving-off").click(function() {
    thermostat.switchPowerSaveOff();
    $("#power-saving-status").text("Off")
  })

  function updateTemperature() {
    $("#temperature").text(thermostat.temp)
    $("#temperature").attr('class', thermostat.energyUsage())
    $("#celsius").attr('class', thermostat.energyUsage())
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }

  $("#city").change(function() {
    var city = $("#city").val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $("#temp-api").text(data.main.temp);
    })
      $("#chosen-city").text(city)
  })

  $(".change-picture").change(function() {
    $("img").attr("src", $( this ).find( "option:selected" ).data( "img-src" ));
  })

  function sendTemperature() {
    var temperature = { temperature: thermostat.temp }
    $.post("http://localhost:4567/temperature", temperature)
    console.log(temperature)
  }

  $.get("http://localhost:4567/temperature", function(response) {
  thermostat.temp = Number(response)
  updateTemperature();
  })
})

// JSON





