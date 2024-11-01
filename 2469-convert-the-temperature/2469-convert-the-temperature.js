/**
 * @param {number} celsius = 36.50;
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * 1.80 + 32.00;

    let output = [kelvin,fahrenheit];
    return output;
};
