//global level
var a= 10;

console.log(a)

{
    console.log(a)
}

function access() {
    console.log(a)
}


// declaration at block level
{
    var b = 20;
    console.log(b)
}
console.log(b)

// declaration at function level

function dec(){
    var c=30;
    console.log(c)
}


// let key word
//declaration 
// global level
let num=40;
console.log(num)
{
    console.log(num)
}


// block level
{
    let num1=90;
    console.log(num1);
}

//const key word
const fullName="xyz";
console.log(fullName);



// how you declare a variable
// var
var age; //only declaration
console.log(age);

age=30;  //only intialization
console.log(age);

var phone=78676886; //both possible


phone=56756876;
console.log(phone)

var phone =78676886
console.log(phone);

// let
let email;
console.log(email);
email="email@email"
console.log(email)

// let email;

const name="xyz"

// loop
// for loop
for(let i =0;i<= 10; i++){
    console.log(i)
}

let idx= 1;
while (idx <= 5) {
    console.log(idx);
    idx++
}

let v=1;
do {
    console.log(v);
    v++
} while (v<=5);

console.log("----------------------")

// print the all even number between 1-10
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("----------------------")

let your_value=20;
let user_value=prompt("Enter your value:");
while(your_value!=user_value){
    console.log("your value is not match");
    user_value =prompt("enter another value");
}
if(your_value==user_value){
    console.log("your value is matched that is:",user_value);
}

// number
console.log(typeof 1.4)
console.log(typeof "GIET");
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol("$"));
console.log(typeof BigInt(6473468373837))


// object
let obj={
    name:"devil",
    age:40
}

console.log(obj.name)
console.log(obj["age"])


// for in 

for(let key in obj){
    console.log(obj[key])
}

