
      var firebaseConfig = {
      apiKey: "AIzaSyAVJ9CoAjp0z5VDFWMnKAYCVl1kkiUNuLY",
      authDomain: "classtest-3c809.firebaseapp.com",
      databaseURL: "https://classtest-3c809-default-rtdb.firebaseio.com",
      projectId: "classtest-3c809",
      storageBucket: "classtest-3c809.appspot.com",
      messagingSenderId: "656477037580",
      appId: "1:656477037580:web:a01887838d139665247a29"
    };
    
      firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: "+Room_names);
      row="<div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}