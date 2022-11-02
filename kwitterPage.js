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

    
    function send(){
        mensagem = document.getElementById("msg").value 
        firebase.database().ref(Nomesala).push({
            name : userName,
            message : mensagem,
            like : 0
        })

        document.getElementById("msg").value = ""

    }

    function getData() { firebase.database().ref("/"+Nomesala).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebaseMessageId = childKey;
        messageData = childData;
//Início do código
        console.log(firebaseMessageId);
          console.log(messageData);
          name = messageData['name'];
          message = messageData['message'];
        like = messageData['like'];
        nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
        messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
        spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

       row = nameWithTag + messageWithTag +like_button + spanWithTag;       
       document.getElementById("output").innerHTML += row;
//Fim do código
     } });  }); }
getData();

function updateLike(messageId){
    buttonid = messageId
    likes = document.getElementById(buttonid).value 
    updatelikes = Number(likes) + 1 

    firebase.database().ref(Nomesala).child(messageId).update({
        like : updatelikes

    })

}

function logout(){
    localStorage.removeItem("userName")
    localStorage.removeItem("roomName")
    window.location.replace ("index.html")
}