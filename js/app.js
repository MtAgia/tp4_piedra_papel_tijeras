/*
Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :crear un script (en el repo de conceptos de JS o realizar un nuevo repo) con toda la logica 
necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y 
al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.
usar DOOM
*/
const num = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let btnEnviar = document.getElementById(`btnEnviar`).addEventListener(`click`, enviarRespuesta);
let aleatorio = num(1, 4)
let inputRespuesta = document.getElementById(`inputJugada`);


function enviarRespuesta(){
    switch (inputRespuesta.value) {
      case `1`:
        alert(`jugada: elegiste piedra`);
        if (aleatorio == 1) {
          alert(`el resultado contra tu rival fue: piedra y tu jugada fue piedra empate!`);
        } else if (aleatorio == 2) {
        alert(
          `el resultado contra tu rival fue: papel y tu jugada fue piedra perdiste!`
        );
        } else if (aleatorio == 3) {
        alert(
          `el resultado contra tu rival fue: tijeras y tu jugada fue piedra ganaste!`
        );
        } else {
          document.write(`ingrese un numero valido`);
        }
        break;
      case `2`:
        alert(`jugada: elegiste papel`);
        if (aleatorio == 1) {
        alert(
          `el resultado contra tu rival fue: piedra y tu jugada fue papel ganaste!`
        );
        } else if (aleatorio == 2) {
        alert(
          `el resultado contra tu rival fue: papel y tu jugada fue papel empate!`
        );
        } else if (aleatorio == 3) {
        alert(
          `el resultado contra tu rival fue: tijeras y tu jugada fue papel perdiste!`
        );
        } else {
          document.write(`ingrese un numero valido`);
        }
        break;
      case `3`:
        alert(`jugada: elegiste tijeras`);
        if (aleatorio == 1) {
        alert(
          `el resultado contra tu rival fue: piedra y tu jugada fue tijeras perdiste!`
        );
        } else if (aleatorio == 2) {
        alert(
          `el resultado contra tu rival fue: tijeras y tu jugada fue papel ganaste!`
        );
        } else if (aleatorio == 3) {
        alert(
          `el resultado contra tu rival fue: tijeras y tu jugada fue tijeras empate!`
        );
        } else {
          document.write(`ingrese un numero valido`);
        }
        break;
      default:
        document.write(`igrese jugada valida`);
        break;
    }
    inputRespuesta.value = ""
}

