document.getElementById("username").addEventListener("keypress", function(event) {
    if (event.keyCode === 76) {
      addUser();
    }
  });

function addUser(){
    user_name=document.getElementById("username").value;
    localStorage.setItem("user_name",user_name);
    console.log("hi")
    window.location="kwitter_room.html";
}