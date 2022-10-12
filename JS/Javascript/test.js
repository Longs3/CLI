function isPrime(num) { if (num <= 1) return false; if (num <= 3) return true; if (num % 2 == 0 || num % 3 == 0) return false; for (var i = 5; i <= Math.sqrt(num); i += 6) { if (num % i == 0 || num % (i + 2) == 0) return false; } return true; }
function primeFactors(num) { var arr = []; while (num % 2 == 0) { arr.push(2); num /= 2; } for (var i = 3; i * i <= num; i += 2)  while (num % i == 0) { arr.push(i); num /= i; } if (num > 2) arr.push(num); return arr; }

console.log(primeFactors(12));
console.log(primeFactors(5));
console.log(primeFactors(70));