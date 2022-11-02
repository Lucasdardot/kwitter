function addUser(){
  var userName = document.getElementById("userName").value
  localStorage.setItem("username",userName)
  window.location = "kwitterRoom.html"
}