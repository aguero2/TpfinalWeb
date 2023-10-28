let array = ["img/carrusel1.jpg", "img/carrusel2.jpeg", "img/carrusel3.jpg"];
let ant = document.querySelector("#banterior");
let sig = document.querySelector("#bsiguiente");
const im = document.getElementById("imag");
let cont = 0;
let max= array.length-1

function anterior() {
  if (cont === 0) {
    cont = max;
  } else {
    cont--;
  }
  im.src = array[cont];
}

function siguiente() {
  if (cont === max) {
    cont = 0;
  } else {
    cont++;
  }
  im.src = array[cont];
}

ant.onclick=anterior
sig.onclick=siguiente