//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCYh3Zq0YVYnzChV9nvC7bqUxI-37Jv-DM",
      authDomain: "kwitter-56eaa.firebaseapp.com",
      databaseURL: "https://kwitter-56eaa-default-rtdb.firebaseio.com",
      projectId: "kwitter-56eaa",
      storageBucket: "kwitter-56eaa.appspot.com",
      messagingSenderId: "418817969389",
      appId: "1:418817969389:web:8e32425108c5f39ba450e4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
      });
      document.getElementById("msg").value = "";
    }
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tick= "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs_up'>Like: " + like + "</span></button><hr>";

row=name_with_tick + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("press the like button" + message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
