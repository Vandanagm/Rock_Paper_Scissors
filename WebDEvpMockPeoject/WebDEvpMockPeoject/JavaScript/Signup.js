// let password=()=>{
//     let input=document.getElementById("password-input")
//     input.type="text"
//      let element=document.getElementById("eyevisible")
//     element.style.display="none"
//     let element1=document.getElementById("eyeinvisible")
//     element1.style.display="block"
// }
// let password1=()=>{
//     let input=document.getElementById("repeat-password-input")
//     input.type="password"
//      let element=document.getElementById("eyevisible")
//     element.style.display="block"
//     let element1=document.getElementById("eyeinvisible")
//     element1.style.display="none"
// }
// let form=document.getElementById("form")
// let firstname_input=document.getElementById("first-input").value
// let email_input=document.getElementById("email-input").value
// let password_input=document.getElementById("password-input").value
// let repeat_password_input=document.getElementById("repeat-password-input").value
// let error_message=document.getElementById("error-message").value

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let errors = []
//     if(firstname_input){
//         errors=getSignupFormErrors(firstname_input.value,email_input.value,password_input.value,repeat_password_input.value)
//     }
//     else{
//         errors=getLoginFormerrors(email_input.value,password_input.value)
//     }
//     if(errors.length>[0]){
//         e.preventDefault()
//         //join multiple strings of array into one string
//         error_message.innerText=errors.join(". ")
//     }
// })
// function getSignupFormErrors(firstname,email,password,repeat){
//     let errors=[]
//     if(firstname===''||firstname==null){
//         errors.push('Firstname is required')
//         firstname_input.parentElement.classList.add('incorrect')
//     }
//      if(email===''||email==null){
//         errors.push('Email is required')
//         email_input.parentElement.classList.add('incorrect')
//     }
//      if(password===''||password==null){
//         errors.push('Password is required')
//         password.parentElement.classList.add('incorrect')
//     }
//     if(repeatPassword===''||repeatPassword==null){
//         errors.push('Password is required')
//         repeatPassword.parentElement.classList.add('incorrect')
//     }
//     return errors;
// }
// allInputs.forEach(input=>{
//     input.addEventListener('input',()=>{
//         if(input.parentElement.classList.contains('incorrect')){
//             input.parentElement.classList.remove('incorrect')
//             error_message.innerText=''
//         }
//     })
// })

let form=document.getElementById("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    let firstname_input=document.getElementById("first-input").value
    let email_input=document.getElementById("email-input").value
    let password_input=document.getElementById("password-input").value
    let repeat_password_input=document.getElementById("repeat-password-input").value

    if(firstname_input===""||firstname_input.length===0){
        displayerror("First name is required")
        return
        // alert("First name is required")
    }

    if(email_input===""||email_input.length===0){
        displayerror("email is required")
        return
        // alert("First name is required")

    }
      if(password_input===""||password_input.length===0){
        displayerror("password is required")
        return
        // alert("First name is required")

    }
      if(repeat_password_input===""||repeat_password_input.length===0){
        displayerror("repeat password is required")
        return
        // alert("First name is required")
    }
    let user=localStorage.getItem(email_input)
    if(user){
        alert("User already exist")
        window.location.href='Login.html'
    return;
    }
    if(password_input===repeat_password_input){
        alert("Signed up Succesfully")
        let obj={
            firstname:firstname_input,
            email:email_input,
            password:password_input,
        }
        localStorage.setItem(email_input,JSON.stringify(obj))
        window.location.href='Login.html'
    }
    else
    displayerror("Enter same password")
})
function  displayerror(value){
    document.getElementById("error_message").textContent=value;
}