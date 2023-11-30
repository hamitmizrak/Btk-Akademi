const submitForm = (event) => {
    // Browser sen dur bir şey  yapma ben yaparım.
    // event.preventDefault;

    // VALUE
    let email="", password="";

    // DOM
    email = String(document.getElementById("email_id").value).trim();
    password = String(document.getElementById("password_id").value).trim();
    
    // interpolation
    alert(`${email} => ${password}`)

    // LocalStorage
    localStorage.setItem("email_", email);
    localStorage.setItem("password_", password);
}
//submitForm()