let first = document.querySelector("#first")
let last = document.querySelector("#last")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let inputs = document.querySelectorAll("input")
let submit =document.querySelector("#claim") 


submit.addEventListener("click", function(){
if(inputs[0,1,2,3].value.length == 0){
    console.log("no info")
}else{
    let info = {
        firstName : first.value,
        lastName : last.value,
        email : email.value,
        password : password.value
    }
    console.log(info)
}})