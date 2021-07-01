
 const signupBtn = document.getElementById("signUpBtn");
 signUpBtn.addEventListener('click', e => {
 e.preventDefault();

  
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;


    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        window.location.href="signedUp.html"
    });
  
});


