
let eye=document.getElementById("eye-toggle")
eye.addEventListener("click",()=>{
    let pass=document.getElementById("passInput")
    if(pass.type == "password"){
        pass.type="text"
        eye.style.color="red"
    }
    else{
        pass.type="password"
        eye.style.color="black"
    }
})

let user =document.getElementById("userInput")
let UC=document.getElementById("user-content")


user.addEventListener("focus",()=>{
    user.classList.add("User")
    UC.innerHTML="Username is required"
    UC.classList.add("UC")
})

user.addEventListener("blur",()=>{
    user.classList.remove("User")
    UC.innerHTML= ""
})


let password=document.getElementById("passInput")
let PC=document.getElementById("pass-content")

password.addEventListener("focus",()=>{
    password.classList.add("Pass")
    PC.innerHTML="password is required"
    PC.classList.add("PC")
})

password.addEventListener("blur",()=>{
    password.classList.remove("Pass")
    PC.innerHTML=""
    
})

let  msg=document.getElementById("msg")

localStorage.setItem("username","rutuja91")
localStorage.setItem("password","123456")

function login(){
    let user=document.getElementById("userInput")
    let pass=document.getElementById("passInput")
    document.getElementById("btn").addEventListener("click",()=>{
    if(user.value===""||pass.value===""){
        msg.classList.add("msg")
        msg.innerHTML="❌ Please Fillout alll fields "
        msg.style.color="red"
        return;
    }
    else{
        msg.innerHTML=""
    }
})
}

// document.getElementById("btn").addEventListener("click",()=>{
//     if(user.value===""||pass.value===""){
//         msg.classList.add("msg")
//         msg.innerHTML="❌ Please Fillout alll fields "
//         msg.style.color="red"
//         return;
//     }
//     else{
//         msg.innerHTML=""
//     }
// })



