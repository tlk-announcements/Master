// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBO05pGLeVWLmG-XnZRbsO8Z7XkCI08KDA",
    authDomain: "tlk-announcements-a133d.firebaseapp.com",
    databaseURL: "https://tlk-announcements-a133d.firebaseio.com",
    projectId: "tlk-announcements-a133d",
    storageBucket: "tlk-announcements-a133d.appspot.com",
    messagingSenderId: "796149548275"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
                                                                // Indexing a club 
                                                                //begins at 0 

var selecting_a_club; 


// console.log(selecting_a_club);
// console.log(typeof(selecting_a_club));

var mainText = document.getElementById('mainText');
var setChild = document.getElementById('setChild');
// var firebaseRef = firebase.database().ref().child(selecting_a_club);


function upload_to_FB(){
    selecting_a_club = document.getElementById('list_of_clubs').value;
    var firebaseRef = firebase.database().ref().child(selecting_a_club);
    var child = setChild.value;
    var messageText =  mainText.value;
    firebaseRef.child(child).set(messageText);
    alert("Your announcement has been recived");
    mainText.value = "";

}
