console.log("Today we are going to learn array")
let arr=[1, 2, true, "Hii", {}, []];
console.log(arr[3])

let arrObj=new Array(1,2,3,"hii",{});
console.log(arrObj);

console.log(Array(3));
console.log(Array.of(1,2,3,5));

console.log(Array.from("abcdef"));

let num1=[1,2,3,4,];
num1.push(4);
num1.pop();
console.log(num1)
num1.pop()
console.log(num1)

num1.unshift(0);
console.log(num1);
num1.shift();
console.log(num1)

console.log("value",num1.at(2));
console.log("index",num1.indexOf(3));
console.log(num1.includes(8));

console.log(num1.reverse());
console.log(num1.join("-"));

console.log(num1)
num1.splice(2,2,"hii");
console.log(num1)


// 1 - find maximum element

let Arr = [1, 2, 10, 15, 79, 80];
let max = arr[0];

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Maximum element is:", max);

// 2 - count even and odd numbers

let num = [1, 2, 4, 5, 7, 89, 45, 3, 44];

let even = [];
let odd = [];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        even.push(num[i]);
    } else {
        odd.push(num[i]);
    }
}

console.log("Even numbers:", even);
console.log("Odd numbers:", odd);

// 3 - sum of all array element

let Arr1 = [4, 6, 13, 30, 48, 98];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum of array elements:", sum);

// 4 - find the difference of max element and min element

let Arr2 = [1, 2, 8, 10, 15, 79,];

let Max = Math.max(...arr);
let min = Math.min(...arr);

let difference = max - min;

console.log("Maximum element:", max);
console.log("Minimum element:", min);
console.log("Difference:", difference);

// 5 - Merge two array into a single array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = arr1.concat(arr2);

console.log(mergedArray); 

 
// fin d the duplicate from the array [1,2,2,3,4,5,6,6,7]



