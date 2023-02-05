const inputMensaje = document.querySelector("#input");
const inputResultado = document.querySelector("#output");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const img1 = document.getElementById("muñeco");
const img2 = document.getElementById("text");

inputResultado.style.display = "none";
btnCopiar.style.display = "none";

function validarEntrada() {
  var inputValue = inputMensaje.value;
  var invalidCaracters = /[^a-z\s]/g;
  var emptyContent = inputMensaje.value === ""

  if (invalidCaracters.test(inputValue) || emptyContent) {
      alert("Por favor asegurese de haber escrito un mensaje en el espacio \"Ingrese el texto aquí\" y de haber utilizado unicamente letras minúsculas, sin signos especiales.");
      return false;
  } else {
      return true;
  }
}

function encriptar (){

  if(validarEntrada()){

      inputResultado.style.display = "block";
      btnCopiar.style.display = "block";
      img1.style.display = "none";
      img2.style.display = "none";

    var mensaje = inputMensaje.value;

    var mensajeEncriptado = mensaje
    .replaceAll("e" , "enter")
    .replaceAll("i" , "imes")
    .replaceAll("o" , "ober")
    .replaceAll("a" , "ai") 
    .replaceAll("u" , "ufat")

    inputResultado.value = mensajeEncriptado;
  }
}
  
function desencriptar (){

  if (validarEntrada()) {
    
      img1.style.display = "none";
      img2.style.display = "none";
      inputResultado.style.display = "block";
      btnCopiar.style.display = "block";

    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter" , "e")
    .replaceAll("imes" , "i")
    .replaceAll("ober" , "o")
    .replaceAll("ai" , "a") 
    .replaceAll("ufat" , "u")

    inputResultado.value = mensaje;
  }
}

function copiar (){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputResultado.style.display = "none";
    btnCopiar.style.display = "none";
    img1.style.display = "block";
    img2.style.display = "block";
    inputMensaje.value = "";
    inputMensaje.focus();
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

inputMensaje.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    encriptar();
  }
});


