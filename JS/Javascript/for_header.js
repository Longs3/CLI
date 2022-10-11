function cat(val1, val2) { return val1 + val2; }
function clear() { console.clear(); }
function cp(val1, val2) { val1 = val2; return val1; }
function factorial(val1) { return val1 > 1 ? val1 * factorial(val1 - 1) : 1; }
function len(val1) { return val1.length; }
function reverseString(str) { return [...String(str)].reverse().join(''); }
function toLower(val1) { return val1.toLowerCase(); }
function toUpper(val1) { return val1.toUpperCase(); }
// bit
function decimalToBinary(val1) { return Number.isNaN(val1) ? 0 : val1.toString(2); }
function decimalToOctal(val1) { return Number.isNaN(val1) ? 0 : val1.toString(8); }
function decimalToHexa(val1) { return Number.isNaN(val1) ? 0 : vFal1.toString(16); }
function binaryToDecimal(val1) { return Number.isNaN(val1) ? 0 : parseInt(val1, 2); }
function binaryToOctal(val1) { return Number.isNaN(val1) ? 0 : decimalToOctal(parseInt(val1, 2)); }
function binaryToOctal(val1) { return Number.isNaN(val1) ? 0 : decimalToHexa(parseInt(val1, 2)); }
function octalToDecimal(val1) { return Number.isNaN(val1) ? 0 : parseInt(val1, 8); }
function octalToBinary(val1) { return Number.isNaN(val1) ? 0 : decimalToBinary(parseInt(val1, 8)); }
function octalToBinary(val1) { return Number.isNaN(val1) ? 0 : decimalToHexa(parseInt(val1, 8)); }
function hexaToDecimal(val1) { return Number.isNaN(val1) ? 0 : parseInt(val1, 16); }
function haxaTodecimal(val1) {
    let [i, f] = val1.split('.');
    i = parseInt(i, 16);
    f = parseInt(f, 16) / Math.pow(16, f.length);
    return i + f;
}
/*
* octal: 071
* hexa: 0xac
*
*/

// temperature
function celsiusToKelvin(val1) { return (Number.isNaN(val1)) ? 0 : val1 + 273; }
function celsiusToFaren(val1) { return (Number.isNaN(val1)) ? 0 : (9 / 5) * val1 + 32; }
function kelvinToCelsius(val1) { return (Number.isNaN(val1)) ? 0 : val1 - 273; }
function kelvinToFaren(val1) { return (Number.isNaN(val1)) ? 0 : celsiusToFaren(kelvinToCelsius(val1)); }
function farenToCelsius(val1) { return (Number.isNaN(val1)) ? 0 : (val1 - 32) * 5 / 9; }
function farenToKelvin(val1) { return (Number.isNaN(val1)) ? 0 : 273 + farenToCelsius(val1); }
// logic gate
function Gate(bool) { return bool ? true : false; }
function Notgate(bool) { return bool ? false : true; }
function Andgate(bool, check) { return (bool && check) ? true : false; }
function Orgate(bool, check) { return (bool || check) ? true : false; }
function Norgate(bool, check) { return Notgate(Orgate(bool, check)); }
function Nandgate(bool, check) { return Notgate(Andgate(bool, check)); }
function Xorgate(bool, check) { return (bool == check) ? false : true; }
function Xnorgate(bool, check) { return Notgate(Xorgate(bool, check)); }


function add() { var value = 0; for (var i = 0; i < arguments.length; i++) { value += arguments[i]; } return value; }
function sub() { var value = 0; if (arguments.length == 0) return 0; else { value = arguments[0]; for (var i = 1; i < arguments.length; i++) { value -= arguments[i]; } } return value; }
function mul() { var value = 1; if (arguments.length == 0) return 0; else { for (var i = 0; i < arguments.length; i++) value *= arguments[i]; } return value; }
function div() { var value = 0; if (arguments.length == 0) return 0; else { value = arguments[0]; for (var i = 1; i < arguments.length; i++) { value /= arguments[i]; } } return value; }
/*
** onblur       An element loses focus
** onchange     The content of a form field chanes
** onclick      The mouse clicks an object 
** onerror      An error occurs when the document or an image loads
** onfocus      An element gets focus
** onkeydown    A key on the keyboard is pressed
** onkeypress   A key on the keyboard is pressed or held down
** onkeyup      A key on the keyboard is released
** onload       A page or an image is finished loading
** onmousedown  A mouse button is pressed
** onmousemove  A mouse is moved
** onmouseout   A mouse is moved off an element
** onmouseover  The mouse is moved over an element
** onmouseup    A mouse button is released
** onsubmit     The submit button is clicked in a form 
*/
console.log(add('hi', 'ho'));