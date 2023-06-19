function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function mascaratel(){  
    const tel = document.getElementById("inputTel");
    if(tel.value.length == 4){
        tel.value+= '-';
    }
  }