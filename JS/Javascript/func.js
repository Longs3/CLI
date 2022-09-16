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