function cat(val1, val2) { return val1 + val2; }
function clear() { console.clear(); }
function cp(val1, val2) { val1 = val2; return val1; }
function factorial(val1) { return val1 > 1 ? val1 * factorial(val1 - 1) : 1; }
function len(val1) { return val1.length; }
function reverseString(str) { return [...String(str)].reverse().join(""); }
function toLower(val1) { return val1.toLowerCase(); }
function toUpper(val1) { return val1.toUpperCase(); }
function isEqual(val1, val2) { var a = Object.getOwnPropertyNames(val1); var b = Object.getOwnPropertyNames(val2); if (len(b) != len(a)) return false; for (var i = 0; i < len(a); i++) if (val1[a[i]] != val2[a[i]]) return false; return true; }
// bit
function decimalToBinary(val1) { return Number.isNaN(val1) ? 0 : val1.toString(2); }
function decimalToOctal(val1) { return Number.isNaN(val1) ? 0 : val1.toString(8); }
function decimalToHexa(val1) { return Number.isNaN(val1) ? 0 : val1.toString(16); }
function binaryToDecimal(val1) { return Number.isNaN(val1) ? 0 : parseInt(val1, 2); }
function binaryToOctal(val1) { return Number.isNaN(val1) ? 0 : decimalToOctal(parseInt(val1, 2)); }
function binaryToOctal(val1) { return Number.isNaN(val1) ? 0 : decimalToHexa(parseInt(val1, 2)); }
function octalToDecimal(val1) { return Number.isNaN(val1) ? 0 : parseInt(val1, 8); }
function octalToBinary(val1) { return Number.isNaN(val1) ? 0 : decimalToBinary(parseInt(val1, 8)); }
function octalToBinary(val1) { return Number.isNaN(val1) ? 0 : decimalToHexa(parseInt(val1, 8)); }
function hexaToDecimal(val1) { return Number.isNaN(val1) ? 0 : parseInt(val1, 16); }

/*
 * octal: 071
 * hexa: 0xac
 *
 */

// temperature
function celsiusToKelvin(val1) { return Number.isNaN(val1) ? 0 : val1 + 273; }
function celsiusToFaren(val1) { return Number.isNaN(val1) ? 0 : (9 / 5) * val1 + 32; }
function kelvinToCelsius(val1) { return Number.isNaN(val1) ? 0 : val1 - 273; }
function kelvinToFaren(val1) { return Number.isNaN(val1) ? 0 : celsiusToFaren(kelvinToCelsius(val1)); }
function farenToCelsius(val1) { return Number.isNaN(val1) ? 0 : ((val1 - 32) * 5) / 9; }
function farenToKelvin(val1) { return Number.isNaN(val1) ? 0 : 273 + farenToCelsius(val1); }
// logic gate
function Gate(bool) { return bool ? true : false; }
function Notgate(bool) { return bool ? false : true; }
function Andgate(bool, check) { return bool && check ? true : false; }
function Orgate(bool, check) { return bool || check ? true : false; }
function Norgate(bool, check) { return Notgate(Orgate(bool, check)); }
function Nandgate(bool, check) { return Notgate(Andgate(bool, check)); }
function Xorgate(bool, check) { return bool == check ? false : true; }
function Xnorgate(bool, check) { return Notgate(Xorgate(bool, check)); }

function add() { var value = 0; for (var i = 0; i < arguments.length; i++) { value += arguments[i]; } return value; }
function sub() { var value = 0; if (arguments.length == 0) return 0; else { value = arguments[0]; for (var i = 1; i < arguments.length; i++) { value -= arguments[i]; } } return value; }
function mul() { var value = 1; if (arguments.length == 0) return 0; else { for (var i = 0; i < arguments.length; i++) value *= arguments[i]; } return value; }
function div() { var value = 0; if (arguments.length == 0) return 0; else { value = arguments[0]; for (var i = 1; i < arguments.length; i++) { value /= arguments[i]; } } return value; }
// Math
function sigma(start, end, n) { var value = 0; try { parseInt(start); parseInt(end); parseInt(n); } catch (err) { return null; } for (var i = start; i <= end; i++) { value += Math.pow(i, n); } return value; }
function isPrime(num) { if (num <= 1) return false; if (num <= 3) return true; if (num % 2 == 0 || num % 3 == 0) return false; for (var i = 5; i * i <= n; i += 6) { if (n % i == 0 || n % (i + 2) == 0) return false; } return true; }
function primeFactors(num) { var arr = []; while (num % 2 == 0) { arr.push(2); num /= 2; } for (var i = 3; i * i <= num; i += 2)  while (num % i == 0) { arr.push(i); num /= i; } if (num > 2) arr.push(num); return arr; }
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
a = { a: 11, b: 12 };
b = { a: 11, b: 12 };
c = { a: 12, b: 12 };
console.log(isEqual(a, b));
console.log(isEqual(a, c));
