# Thermostat Challenge

Week 5 challenge to model a simple thermostat, using JavaScript.
https://github.com/makersacademy/course/tree/master/thermostat

## Business Logic Specification
1. Thermostat starts at 20 degrees
2. You can increase the temperature with an up function
3. You can decrease the temperature with a down function
4. The minimum temperature is 10 degrees
5. If power saving mode is on, the maximum temperature is 25 degrees
6. If power saving mode is off, the maximum temperature is 32 degrees
7. Power saving mode is on by default
8. You can reset the temperature to 20 with a reset function
9. You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
10. (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## Interface
Using HTML/CSS to create a user interface.

3 input elements that represent the thermostat's main API:
- thermostat.up()
- thermostat.down()
- thermostat.reset()

2 functions that control power saving:
- thermostat.switchPowerSaveOn()
- thermostat.switchPowerSaveOff()

Information represented to the user:
- thermostat.getCurrentTemp()
- thermostat.isPowerSavingModeOn()
- thermostat.energyUsage() 
