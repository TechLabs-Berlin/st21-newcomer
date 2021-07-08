const signupBtn = document.querySelector('#signUpBtn');
signupBtn.addEventListener('click', e => {
e.preventDefault();

const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

auth.createUserWithEmailAndPassword(email, password).then
console.log('User signed up!');
});


signUpBtn.addEventListener("click", function(){
    window.location.href="signedUp.html"
  })
  