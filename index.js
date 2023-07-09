// function factorial (num){
//     if(num === 0 || num === 1){
//         return 1;
//     }
//     return num * factorial(num-1);
// }
// var a = factorial(5);
// console.log(a);

// ========pilandrome========
// function pilandrome (str){
//     return str.split('').reverse().join('');
// }

// var a = pilandrome("nun");
// console.log(a);

// =====prime====

// function isPrime(num){
//     if(num === 1){
//         return false;
//     }
//     for (let i = 2; i < Math.sqrt(num); i++) {
//         if(num % i == 0){
//             return false;
//         }
//         return true;
//     }
// }
// const num = 17;
// if (isPrime(num)) {
//   console.log(num + ' is a prime number.');
// } else {
//   console.log(num + ' is not a prime number.');
// }

// ====finbonacci===
function fibo(n){
    var fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        var next = fibonacci[i-1] + fibonacci[i-2];
        fibonacci.push(next);
        
    }
    return fibonacci;
}

var fibonacciSequence = fibo(10);

console.log('Fibonacci sequence:', fibonacciSequence);