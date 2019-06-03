window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topnav").style.top = "0px";
  } else {
    document.getElementById("topnav").style.top = "20px";
  }
} 

document.addEventListener("DOMContentLoaded", function(){
    checkUser();
  });


function checkUser(){
  var config = {
    apiKey: "AIzaSyBO05pGLeVWLmG-XnZRbsO8Z7XkCI08KDA",
    authDomain: "tlk-announcements-a133d.firebaseapp.com",
    databaseURL: "https://tlk-announcements-a133d.firebaseio.com",
    projectId: "tlk-announcements-a133d",
    storageBucket: "tlk-announcements-a133d.appspot.com",
    messagingSenderId: "796149548275"
    };
    firebase.initializeApp(config);
  

  var changeText = document.getElementById("btnSN");
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        changeText.innerHTML = "Log Out";
        changeText.href = " "
        console.log('logged in');
        const btnLogout = document.getElementById("btnSN");
        btnLogout.addEventListener('click', e => {firebase.auth().signOut();});
    }else{
        changeText.innerHTML = "Sign In";
        console.log('not logged in');
    }
}); 
  
}


