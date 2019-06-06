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

                                                                // Indexing a club 
                                                                //begins at 0 

var selecting_a_club; 

var acc_day = "";
var acc_mon = "";
var divider = " ----- "

function upload_to_FB(){
    firebase.initializeApp(firebaseConfig);
    var mainText = document.getElementById('mainText');
    var setChild = document.getElementById('setChild');
    selecting_a_club = document.getElementById('list_of_clubs').value;
    var firebaseRef = firebase.database().ref().child(selecting_a_club);
    var child = setChild.value;
    var messageText =  mainText.value;
    firebaseRef.child(child).set(messageText);
    alert("Your announcement has been recived");
    mainText.value = "";

}

function retrieve_from_FB(){
    firebase.initializeApp(firebaseConfig);
    // Retrieving each announcement for the indicated club
    dbstuff = document.getElementById('output').accessKey;
    var firebaseshow = firebase.database().ref().child(dbstuff);
    firebaseshow.on("child_added", snap =>{
    console.log(snap.key,snap.val());
    // ---------------------------------------- added -----------------------------------------------
    var para = document.createElement("p");
    var node = document.createTextNode(String(snap.key) + divider + String(snap.val()));
    para.appendChild(node);

    var element = document.getElementById("output");
    element.appendChild(para);

 }); 
}


function dates_for_t(){
    var d = new Date();

    if (String(d.getMonth()+1).length == 1){
        acc_mon = String("0" + String(d.getMonth()+1));
    }else{
        acc_mon = String(d.getMonth()+1);
    }

    if (String(d.getDate()).length == 1){
        acc_day = String("0" + String(d.getDate()));
    }else{
        acc_day = String(d.getDate());
    }
}

function just_today(){
    dates_for_t();
    console.log(acc_mon, acc_day);
    var everything = ["General Ann", "IBT", "GDM", "Leadership", "SHSM", "DECA", "Robotics"];
    for (x in everything){
        // Retrieving each announcement for the indicated club
        var firebaseshow = firebase.database().ref().child(everything[x]);
        firebaseshow.on("child_added", snap =>{
            ev_date = String(snap.key).split("-");
            ev_mon = ev_date[1];
            ev_day = ev_date[2];

            if ((ev_mon == acc_mon) && (ev_day == acc_day)){
                var para = document.createElement("p");
                var node = document.createTextNode(String(snap.val()));
                para.appendChild(node);

                var element = document.getElementById("output");
                element.appendChild(para);
                console.log(snap.key,snap.val());
            }else{
                console.log(snap.key,snap.val());
            }
            
        
        });
    }

  
}