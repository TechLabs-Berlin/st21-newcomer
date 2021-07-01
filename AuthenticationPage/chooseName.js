// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCho71qe7-7EcTiNVASjCt4EvSNpkdE5kU",
  authDomain: "newcomer-84763.firebaseapp.com",
  databaseURL: "https://newcomer-84763-default-rtdb.firebaseio.com",
  projectId: "newcomer-84763",
  storageBucket: "newcomer-84763.appspot.com",
  messagingSenderId: "852309015261",
  appId: "1:852309015261:web:a9744cea815e902c437934",
  measurementId: "G-B2XXMGMVQD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore()

const docRef = firestore.doc("user/Name");
const enterName = document.querySelector("#enterName");
const inputName = document.querySelector("#inputName");
const saveBtn = document.querySelector("#saveBtn");
const nextBtn=document.querySelector("#nextBtn");

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

nextBtn.addEventListener("click", function(){
  window.location.href="chooseAvatar.html"
})

firestore.collection("User").get().then(snapshot=>{
  console.log(snapshot.docs)
})