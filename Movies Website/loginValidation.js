const login = document.querySelector("#submit")
const reg = document.querySelector("#reg")

login.addEventListener('click',function(e){
    e.preventDefault()

//Validating The User Login details//

for(let i = 0;i<=3;i++ ){

    if (i<=3 & email.value ==="Strongadas" & pass.value === "Strong"){

        window.location.href = "home.html"
        alert("Hello Your Access Was Aproved Welcome 😁")
        return ;
       
        
       }else{
    
            reg.innerHTML = "Please Register" 
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
            signup.checked= true;  

       }
      
}
    
  
})


//Going to reg form
reg.addEventListener('click' ,function(){
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    signup.checked= true;
})




//Creating an Account
const create = document.querySelector('#create')
const username = document.querySelector("#username")
const lognow = document.querySelector('#lognow')

lognow.addEventListener("click",function(e){
    e.preventDefault()
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    signup.checked= false;
})


create.addEventListener('click',function(e){
e.preventDefault()

let details = "New User : "+ username.value + " Please add me to your Database"

const whatsapp = " https://wa.me/+270622773352?text= " + encodeURIComponent(details)

if(username === isNaN || username === null){
    alert("Please fill the details")
}else{
    window.location.href = whatsapp;
}
    

})

