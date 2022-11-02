
//ADICIONE SEUS LINKS FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyAWI8d7VXiVuyhslwG30f6yk-sETZtpR24",
  authDomain: "kwitter-31897.firebaseapp.com",
  projectId: "kwitter-31897",
  storageBucket: "kwitter-31897.appspot.com",
  messagingSenderId: "890830402843",
  appId: "1:890830402843:web:365e6aa9942b6bcd7c8fbe",
  measurementId: "G-WP5NEHT90M"
                       };

  const app = firebase.initializeApp(firebaseConfig);


  userName = localStorage.getItem("userName")
  Nomesala = localStorage.getItem("roomName")

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}



