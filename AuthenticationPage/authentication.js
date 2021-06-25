auth.onAuthStateChanged(user=>{
  console.log(user)
})

const { auth } = require("firebase");

//login
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', e => {
e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email, password)
  .then(cred => {
    console.log('Logged in user!');
  })
  .catch(error => {
    console.log(error.message);
  })
});


loginBtn.addEventListener("click", function(){
  window.location.href="chooseName.html"
})

