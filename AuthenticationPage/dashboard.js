firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});




//Add an Image
var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

//Click on different items to get score
   
document.getElementById("visaScore").onclick=function(){
  var score=parseInt(document.getElementById("score").innerHTML);
  score += 15;
  document.getElementById("score").innerHTML=score;
}
  document.getElementById("anmeldungScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 15;
    document.getElementById("score").innerHTML=score;
  }
  document.getElementById("taxIDScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 5;
    document.getElementById("score").innerHTML=score;
  }
  document.getElementById("healthInsuranceScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 10;
    document.getElementById("score").innerHTML=score;
  }
  document.getElementById("housingScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 30;
    document.getElementById("score").innerHTML=score;
  }
  document.getElementById("transportationScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 30;
    document.getElementById("score").innerHTML=score;
  }
  document.getElementById("transportationScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 5;
    document.getElementById("score").innerHTML=score;
  }
  document.getElementById("educationSystemScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 50;
    document.getElementById("score").innerHTML=score;
  }
 




// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

