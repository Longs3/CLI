function Cat(val1, val2) {
    return val1+val2;
}
function Cp(val1, val2) {
    val1 = val2;
    return val1;
}
function Factorial(val1) {return val1>1? val1*Factorial(val1-1):1;}
console.log(Factorial(5));