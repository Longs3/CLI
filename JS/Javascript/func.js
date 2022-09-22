// this for logging JSON responses from API calss

console.log({
    'Email': '',
    'Group': {},
    'Id': 33,
    'IsHiddenInUI': false,
    'IsSiteAdmin': false,
    'LoginName': 'i:0#.w|virtualdomain\\user2',
    'PrincipleType': 1,
    'Title': 'user2'
});
// appending text to the browser
var element = document.createElement('h1');
element.textContent = 'Hello, World';
document.body.appendChild(element);
// or
element = document.createElement('h1');
element.textContent = prompt("ask the users");
document.body.appendChild(element);


function tobecon() {
    if(window.confirm("Are you sure you want to delete it")) {
    document.write("everything is deleted");
    }
}
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';
text.setAttribute('x', '0');
text.setAttribute('y', '0');
text.textContent = 'Hello, World!';
svg.appendChild(text);
document.body.appendChild(svg);


/*variable_name {Required} The name of the variable: used when calling it.
= [Optional] Assignment (defining the variable)
value {Required when using Assignment} The value of a variable [default: undefined]
*/

// change string to int
var str = "123";
str = parseFloat(str);