describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temp()).toEqual(20);
    });
  });
});
