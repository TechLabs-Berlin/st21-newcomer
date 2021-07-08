

var docRef = firestore.doc("User/Name");
const enterName = document.querySelector("#enterName");
const inputName = document.querySelector("#inputName");
const saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener("click", function () {
  const nameToSave = inputName.value
  console.log("I am going to save" + nameToSave + "to Firestore");
  docRef.set({
    enterName: nameToSave
  }).then(function () {
    console.log("Name saved!")
  }).catch(function (e) {
    console.log("got an error:", e);
  });


})
document.getElementById("visaScore").onclick=function(){
var score=parseInt(document.getElementById("score").innerHTML);
  score += 50;
  visaScore.onclick = ""
  document.getElementById("score").innerHTML=score;
  docRef.set({
    score: score
  })

}

//Add Name
function display()
{
document.getElementById("displayarea").innerHTML = document.getElementById("inputName").value; 
document.getElementById("inputName").value = "";
document.getElementById("inputNameandSave").style.display = "none";

}



//Add an Image
var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

//Click on different items to get score


  document.getElementById("anmeldungScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 30;
    anmeldungScore.onclick = ""
    document.getElementById("score").innerHTML=score;
  }

  document.getElementById("bankingScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 20;
    bankingScore.onclick = ""
    document.getElementById("score").innerHTML=score;
  }

  document.getElementById("taxIDScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 10;
    taxIDScore.onclick = ""
    document.getElementById("score").innerHTML=score;
  }

  document.getElementById("healthInsuranceScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 20;
    healthInsuranceScore = ""
    document.getElementById("score").innerHTML=score;
  }

  document.getElementById("learnGermanScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 100;
    learnGermanScore = ""
    document.getElementById("score").innerHTML=score;
  
  }
 
  document.getElementById("transportationScore").onclick=function(){
    var score=parseInt(document.getElementById("score").innerHTML);
    score += 30;
    transportationScore = ""
    document.getElementById("score").innerHTML=score;
  
  }
 
 







// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


//Log out button 
logoutBtn.addEventListener("click", function(){
  window.location.href="authentication.html"
})
