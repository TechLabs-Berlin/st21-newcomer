
 const signupBtn = document.getElementById("signUpBtn");
 signUpBtn.addEventListener('click', e => {
 e.preventDefault();

  
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;


    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log('User signed up!');
    });
  
});

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

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user.email + " is logged in!");
  } else {
    console.log('User is logged out!');
  }
});