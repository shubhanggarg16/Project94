
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function add_room(){
      var roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
      purpose:"addinguser",city:"mumbai"
      });
      }
      