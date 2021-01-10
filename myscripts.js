// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var x = document.getElementsByClassName("btn-agree")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  btn.innerHTML="Checkout Now";  

}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var counter = 0;
var add = (function () {
    
    return function () {counter += 1; return counter;}
  })();
  
  function myFunction(){
    document.getElementById("demo").innerHTML = add();
  }

  var subtract = (function () {
    
    return function () {counter -= 1; return counter;}
  })();
  
  function myFun(){
    document.getElementById("demo").innerHTML = subtract();
  }

  function agreeFun(){
    
    document.getElementById("customFit").innerHTML = counter;
    
    

    document.getElementById("detailsColors").innerHTML =counter;
    x.onclick = function() {
      modal.style.display = "none";
    }

    
  }

  

  function btnRed() {
    document.getElementById("modalColor").innerHTML = "Red";
  }

  function btnBlue() {
    document.getElementById("modalColor").innerHTML = "Blue";
  }

  function btnBlack() {
    document.getElementById("modalColor").innerHTML = "Black";
  }

  function btnWhite() {
    document.getElementById("modalColor").innerHTML = "White";
  }

  function btnOrange() {
    document.getElementById("modalColor").innerHTML = "Orange";
  }

  function btnYellow() {
    document.getElementById("modalColor").innerHTML = "Yellow";
  }

  function btnNavy() {
    document.getElementById("modalColor").innerHTML = "Navy";
  }

  function btnDarkBlue() {
    document.getElementById("modalColor").innerHTML = "Dark-Blue";
  }

  function btnBrown() {
    document.getElementById("modalColor").innerHTML = "Brown";
  }

  function btnLightBlue() {
    document.getElementById("modalColor").innerHTML = "Light-Blue";
  }

  function btnGreen() {
    document.getElementById("modalColor").innerHTML = "Green";
  }

  function btnPink() {
    document.getElementById("modalColor").innerHTML = "Pink";
  }

  function btnBlurywood() {
    document.getElementById("modalColor").innerHTML = "Blurywood";
  }

  function btnDarkGreen() {
    document.getElementById("modalColor").innerHTML = "DarkGreen";
  }

  function btnPurple() {
    document.getElementById("modalColor").innerHTML = "Purple";
  }

  function btnBrown() {
    document.getElementById("modalColor").innerHTML = "Brown";
  }

  function btnSkyBlue() {
    document.getElementById("modalColor").innerHTML = "Sky-Blue";
  }

  function btnGrey() {
    document.getElementById("modalColor").innerHTML = "Grey";
  }

