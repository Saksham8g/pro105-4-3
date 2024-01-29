//YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCGqo2IafAEZ0ftFm_BpToKNfbjvqQa1ro",
    authDomain: "sammm-abf41.firebaseapp.com",
    databaseURL: "https://sammm-abf41-default-rtdb.firebaseio.com",
    projectId: "sammm-abf41",
    storageBucket: "sammm-abf41.appspot.com",
    messagingSenderId: "864278416060",
    appId: "1:864278416060:web:58a5a176088f41bb6b1eb9"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

function updatelike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);


    

          firebase.database().ref(room_name).child(message_id).update({

                like : updated_likes

    


    });
}





function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
