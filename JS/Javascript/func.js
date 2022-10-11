// this for logging JSON responses from API class

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
    if (window.confirm("Are you sure you want to delete it")) {
        // do sth
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

// accessing table element and vaule
let table = document.body.firstElementChild;
console.log(table.rows);
console.log(table.rows[0]);
console.log(table.tHead);
console.log(table.tBodies);
/*
*   var qs = location.search.substring(1);
*   var currentHostName = location.hostname;
*   var currentUrl = location.href;
*/

/**
 * -Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
 * 
 */



/*
O(1)
function O(n) {
    console.log(n)
}
O(n)
function O(n) {
    for (var i =0;i<n;i++) {
        console.log(n);
    }
}

O(n^2) 
function O(n) {
    for (var i =0;i<n;i++) {
        console.log(i);
        for(var j=i;j<n;j++)
    }
}

O(n^3)
function O(n) {
    for(var i=0;i<n;i++) console.log(i);
        for(var j=i;j<n;j++) console.log(j);
            for(var k=j;k<n;k++) console.log(k);
}
*/
