function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check');

    checkboxes.forEach((item) => {
        if (item !== checkbox && item.parentNode.parentNode === checkbox.parentNode.parentNode) item.checked = false
    })

    updateBorrar(checkbox);
}

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


function updateBorrar(check){

    const para = check.parentNode;
    const element = document.getElementById("borrarseleccion");
    const node = document.createTextNode(check.parentNode.textContent);

    if(check.checked){
        element.appendChild(node);
    }else if(!check.checked){
        element.removeChild(check.item);
    }
}

function mostrarFiltro(){
    const x = document.getElementById("asi");
    x.style.width = "90vw";
    document.body.style.overflow = 'hidden';
}

function cerrarFiltro(){
    const x = document.getElementById("asi");
    x.style.width = "0vw";
    document.body.style.overflow = 'initial';
}