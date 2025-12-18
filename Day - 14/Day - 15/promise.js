console.log("Today we are going to learn js promise");

document.addEventListener("keydown", (e) => {
    console.log(e.key);
    console.log(e.code);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey)
    // console.log("key down");
 })
// //document.addEventListener("keyup", () => {
//   //  console.log("key up");
// // })
// document.addEventListener("keypress", () => {
//     console.log("key press");
// })
let inputfield=document.querySelector("#input-tag");
inputfield.addEventListener("input",(e)=>{
   console.log(e)
    console.log("input event");
});

inputfield.addEventListener("change",()=>{
    console.log("change event");
});
inputfield.addEventListener("focus",()=>{
    console.log("focus event");
});
inputfield.addEventListener("blur",()=>{
    console.log("blur event");
});
let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("submit")
    console.log(e)
});

// window

window.addEventListener("load",()=>{
    console.log("load")
});
window.addEventListener("DOMContentLoaded",(e)=>{
    console.log("DOMContentLoaded")
    console.log(e);
});
// window.addEventListener("resize",()=>{
//     console.log("resize")
// });
// window.addEventListener("scroll",()=>{
//     console.log("scroll")
// });
