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
// function fibo(n){
//     var fibonacci = [0, 1];
//     for (let i = 2; i < n; i++) {
//         var next = fibonacci[i-1] + fibonacci[i-2];
//         fibonacci.push(next);
        
//     }
//     return fibonacci;
// }

// var fibonacciSequence = fibo(10);

// console.log('Fibonacci sequence:', fibonacciSequence);

// =====isMonotonic====

// function isMonotonic(arr) {
//   let increasing = true;
//   let decreasing = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       increasing = false;
//     }
//     if (arr[i] > arr[i + 1]) {
//       decreasing = false;
//     }
//   }

//   return increasing || decreasing;
// }


// console.log(isMonotonic([1, 2, 3, 4, 5]));     
// console.log(isMonotonic([5, 4, 3, 2, 1]));     
// console.log(isMonotonic([3, 3, 3, 3, 3]));    
// console.log(isMonotonic([1]));   

// =====twoSum====

// function twoSum (array, target){
//     for (let i = 0; i < array.length; i++) {
//         target = target - array[i]
//         for (let j = i+1; j < array.length; j++) {
//             if(target === array[j]){
//                 return [i, j]
//             }
//         }
        
//     }
//     return[];
// }
// // nums = [2,7,11,15], target = 9
// var a =twoSum([2,7,11,15], 9);
// console.log(a);

    // function twoSum (array, target){
    //     var ht ={};
    //     for (let i = 0; i < array.length; i++) {
    //         var needd= target - array[i];
    //         console.log(needd)
    //         if(needd in ht){
    //             console.log(ht[needd])
    //             return [i, ht[needd]];
    //         }else{
    //             ht[array[i]] =  i;
    //         }
            
    //     }
    // }

    // var a =twoSum([2,7,11,15], 117);
    // console.log(a);


    // =====removeDuplicates====
    // var removeDuplicates = function(nums) {
    //     let noDuplicate = [... new Set(nums)];
    //     return noDuplicate;
    // };
    // var a =removeDuplicates([1,1,2])
    // console.log(a);

  
        // =====reverseNumber or number pilindrome====
    // function reverseNumber(number) {
    //     const originalNumber = number;
    //     let reverse = 0;
        
    //     while (number !== 0) {
    //       const digit = number % 10;
    //       console.log(digit);
    //       reverse = reverse * 10 + digit;
    //       number = Math.floor(number / 10);
    //     }
        
    //     return reverse === originalNumber;
    //   }
    
    // var isPalindrome = function(x) {
    //     if(0>x){
    //         return false;
    //     }
    //     const originalNumber = x;
    //     var reverse = 0;
     
    //         while(x!==0){
    //         var digit = x%10;
    //         reverse = reverse * 10 + digit;
    //         x = Math.floor(x/10);
       
    //     }
    //     return originalNumber===reverse;
    // };

    // var a = isPalindrome(-121);
    // console.log(a);


    // var isPalindrome = function(x) {
    //     if (x < 0) {
    //         return false;
    //     }
    
    //     const originalNumber = x;
    //     var reverse = 0;
    //     while (x !== 0) {
    //         var digit = x % 10;
    //         reverse = reverse * 10 + digit;
    //         x = Math.floor(x / 10);
    //     }
    
    //     return originalNumber === reverse;
    // };
    //     var a = isPalindrome(-121);
    // console.log(a);
    
    // =====rotateArray====

    // const rotateArray = (array, k)=>{
        
    //     var len = array.length;
    //     k=k%len;
    //     var a = array.slice(0, len - k);
    //     var b = array.slice(len - k);
    //     a.splice(0, 0, ...b);
    //     return a;
    // }

    // var rotate = function(nums, k) {
    //     var len = nums.length;
    //     k=k%len;
    //     var a = nums.slice(0, len - k);
    //     var b = nums.slice(len - k);
    //     a.splice(0, 0,...b);
    //     return a;
    // };
    // var c = rotate([1,2,3,4,5],3);
    // console.log(c);

    // =====containsDuplicate====
    // var containsDuplicate = function(nums) {
    //     for (let i = 0; i < nums.length; i++) {
    //        for (let j = i+1; j < nums.length; j++) {
    //         if(nums[i] === nums[j]){
    //             return true
    //         }
    //        }
            
    //     }
    //     return false;
    // };
    // var a = containsDuplicate([1,2,3]);
    // console.log(a);


    // =====removeDuplicates====
    // var removeDuplicates = function(nums) {
    //     let uniqueNums = [];
    //     for (let i = 0; i < nums.length; i++) {
    //         if (!uniqueNums.includes(nums[i])) {
    //             uniqueNums.push(nums[i]);
    //         }
    //     }
    //     return uniqueNums.length;
    // };
    
    // var a = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
    // console.log(a);

     // =====findNonReaptingCharacter====
    // function findNonReaptingCharacter(string){
    //     const hashTable = {};
    //     for(let i=0;i<string.length;i++){
    //         if(string[i] in hashTable){
    //             hashTable[string[i]]++;
    //         } else{
    //             hashTable[string[i]]=1;
    //         }
    //     }
    //     for(let i=0;i<string.length;i++){
    //         if(hashTable[string[i]]===1){
    //             return i;
    //         }
    //     }
    //     return null;
    // }

//     function findNonReaptingCharacter(string){
//         var hashTable = {};
//         for (let i = 0; i < string.length; i++) {
//            if(string[i] in hashTable){
//             hashTable[string[i]]++;
//            }else{
//             hashTable[string[i]] = 1;
//            }
            
//         }
//         for (let j = 0; j < string.length; j++) {
//             if(hashTable[string[j]] === 1){
//                 return j ;
//             }
//         }
//         return null;
//     }

//     var a = '1bba1';
//    var b = findNonReaptingCharacter(a);
//    console.log(b)