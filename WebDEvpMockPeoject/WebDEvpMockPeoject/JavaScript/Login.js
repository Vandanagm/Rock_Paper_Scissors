let from=document.getElementById("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let obj=localStorage.getItem(email)
    if(obj){
    let data=JSON.parse(obj)
    if(password===data.password){
         alert("Succefully LogedIn")
         window.location.href="HomePage.html"
         localStorage.setItem("Current_User",obj)
    }
    else{
        alert("Enter Currect Password")
    }
  }
  else{
     alert("User not found Please Sign Up")
  } 
})