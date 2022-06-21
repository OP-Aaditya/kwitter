
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML= "Welcome " +  user_name + "!";
    
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room name- " + room_name);
    row="<div class='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)' > #"+ Room_names +"</div><hr></hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room name " + name);
      window.location="kwitter_page.html";

}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

