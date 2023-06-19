
function myFunction() {
    var x = document.getElementById("navBar");
    if (x.className === "navBar") {
        x.className = "responsive";
        document.getElementsByClassName("responsive").style.height = "100%";
        document.getElementById("mobileicon").style.display = "none";
    } else {
        x.className = "navBar";   
        document.getElementById("responsive").style.height = "0%";
      }
  }
