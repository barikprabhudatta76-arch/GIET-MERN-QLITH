console.log("Today we are going to learn Function")

function fun(v){
    console.log("This is function")
    console.log(v)
}
fun(20)
fun(30)

// function (){

// }

function namedFun(){
    console.log("this is the named function")
}
namedFun()

let exeFun=function (){
    console.log("this is the expressional function")
}
exeFun()

// console.log(exeFun)

let arrowFun = () => {
    console.log("This is the arrow function")
    let a=20
    return a;
}
let a=arrowFun()

console.log(a)

// let hof=function(func){
//       console.log("this is the higherorder function")
// }


// hof(function(){
 //   console.log("this is the argument function")
// })

let hof=function(){
    return function(){
        console.log("return fun")
    }
}

let catchedFun=hof()
catchedFun()

(function IIF(){
    console.log('IIF')
})()



// string

let str = "this is the string";
console.log(str);
console.log(str[3]);

str = "Prabhu";
console.log(str);


let str1 = "This is single qouts";
console.log(str1);

let str2 = "Prabhu"
console.log(str2);

let str3 = new String("PRABHU");
console.log(str3.length);
console.log(str3.valueOf());


let testStr = "This is a string";
// String Property
console.log(testStr.length)
// String Method
console.log(testStr.toUpperCase())
console.log(testStr.toLowerCase())

console.log(testStr.concat(" Amit"))
console.log(testStr.length)

console.log(testStr.trim().length)
console.log(testStr.length)

// console.log(testStr.trimStart())
// console.log(testStr.trimEnd())

console.log(testStr.replace("t","T"))
console.log(testStr.replaceAll("s", "S"))

console.log(testStr.slice(0,4))
console.log(testStr.slice(-11))



let strin = "String";
let New= "";
for (let i = strin.length - 1; i >= 0; i--){
    
    New=New.concat(strin[i])
}
console.log(New);