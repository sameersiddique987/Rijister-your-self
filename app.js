


let form = document.querySelector("#form")
let text = document.querySelector("#text")
let email = document.querySelector("#email")
let cnic = document.querySelector("#cnic")
let password = document.querySelector("#password")

const textRegex = /^[a-zA-Z0-9_]{4,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cnicRegex = /^42\d{3}-\d{7}-\d{1}$/;
const passwordRegex = /^.{8,}$/;

form.addEventListener("submit" , (Event)=>{
    Event.preventDefault()
    console.log(textRegex.test(text.value));
    console.log(emailRegex.test(email.value));
     console.log(cnicRegex.test(cnic.value));
    
        
    
    console.log(passwordRegex.test(password.value));
})