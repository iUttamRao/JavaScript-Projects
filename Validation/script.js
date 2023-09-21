document.getElementById("myForm").addEventListener("submit",function(event){
    const password = documnet.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if(!isValidPassword(password)){

    errorMessage.textContent = "Password must be at least 8 characters long and contain at least one number and one uppercase and lowercase.";

    event.preventDefault();
    }
    else{
        errorMessage.textContent ="";
    }
    
});

function isValidPassword(password){
    const regex =/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}