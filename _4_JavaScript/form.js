const submitForm=(event)=>{
    //alert("submit form");
    //event.preventDefault();

    let email=document.getElementById("email_id").value;
    let password=document.getElementById("password_id").value;
    alert("data")
    alert(`${email} => ${password}`)

    localStorage.setItem("email_",email);
    localStorage.setItem("password_",password);
   
}
//submitForm()