$(document).ready(function() {

  var thermostat = new Thermostat()
  $("#temperature").text(thermostat.temp)

  $("#temperature-up").click(function() {
    thermostat.up();
    $("#temperature").text(thermostat.temp)
  })

  $("#temperature-down").click(function() {
    thermostat.down();
    $("#temperature").text(thermostat.temp)
  })

  $("#temperature-reset").click(function() {
    thermostat.reset();
    $("#temperature").text(thermostat.temp)
  })

  $("#powersaving-on").click(function() {
    thermostat.switchPowerSaveOn();
    $("#power-saving-status").text("On")
  })

  $("#powersaving-off").click(function() {
    thermostat.switchPowerSaveOff();
    $("#power-saving-status").text("Off")
  })


});
