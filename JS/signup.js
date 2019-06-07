(function() {

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBO05pGLeVWLmG-XnZRbsO8Z7XkCI08KDA",
    authDomain: "tlk-announcements-a133d.firebaseapp.com",
    databaseURL: "https://tlk-announcements-a133d.firebaseio.com",
    projectId: "tlk-announcements-a133d",
    storageBucket: "tlk-announcements-a133d.appspot.com",
    messagingSenderId: "796149548275"
    };
    firebase.initializeApp(config);

    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');


    // Add signup event
    btnSignUp.addEventListener('click', e => {
         // Get email and pass
         // TODO: Check for real emails 
         const email = txtEmail.value;
         const pass = txtPassword.value;
         const confirmpass = txtConfirmPassword.value;
         const code = txtCode.value;
         const auth = firebase.auth();
         //Sign in
         if (pass != confirmpass) {
            alert("Passwords are not the same. Please re-enter the same password in both. Passwords must be at least 6 characters long.");
        }else if (code != "d7") {
            alert("Wrong code. Try again.")
        }else if(pass.length < 6 || confirmpass.length < 6){
            alert("Passwords must be at least 6 characters long.");
        }else {
            const promise = auth.createUserWithEmailAndPassword(email,pass);
            promise.catch(e => console.log(e.message));
            alert("You now have an account. Welcome!");
        } 
      
    });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('logged in');
        }else{
            console.log('not logged in');
        }

    }); 

}());
