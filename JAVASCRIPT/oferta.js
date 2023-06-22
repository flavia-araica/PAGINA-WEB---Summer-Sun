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

  function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check');

    checkboxes.forEach((item) => {
        if (item !== checkbox && item.parentNode.parentNode === checkbox.parentNode.parentNode) item.checked = false
    })

    updateBorrar(checkbox);
}