const listaPalabras = document.querySelector(".lista-palabras");
const listaResultado = document.querySelector(".resultado");

Array.from(document.querySelectorAll(".lista-palabras>li")).map(elemento => elemento.dataset.veces = "0");

listaPalabras.addEventListener("click", (elemento) => {
  const palabraCopiar = elemento.target.cloneNode(true);

  //listaResultado.append(palabraCopiar);
  comprobarVeces(palabraCopiar);
});

document.querySelector(".nueva-palabra").addEventListener("change", elemento => {
  document.querySelector(".crear").disabled = elemento.target.value === "";

  document.querySelector(".crear").disabled = elemento.target.value.includes(" ");
});

document.querySelector(".crear").addEventListener("click", (elemento) => {
  const palabrasLi = Array.from(document.querySelectorAll(".lista-palabras>li"));
  const palabras = pasarArray(palabrasLi);

  let prueba = palabras.some(palabra => palabra.toLowerCase() === document.querySelector(".nueva-palabra").value.toLowerCase()) ? console.log("Palabra repetida") : nuevoLi();
  elemento.preventDefault()
});

function nuevoLi() {
  let nuevaPalabra = document.createElement("LI");
  const palabra = document.querySelector(".nueva-palabra").value;
  nuevaPalabra.innerText = palabra;

  if (document.querySelector(".lenguaje").checked) {
    nuevaPalabra.dataset.lenguaje = "si";
  }
  nuevaPalabra.dataset.veces = document.querySelector(".veces").value;

  document.querySelector(".lista-palabras").appendChild(nuevaPalabra);
}

function pasarArray(lista) {
  const palabras = [];

  for (const key in lista) {
    palabras.push(lista[key].innerText);
  }

  return palabras;
}

function comprobarVeces(palabraCopiar) {
  const datosResultados = pasarArray(Array.from(document.querySelectorAll(".resultado>li")));
  let i = 0;
  if (datosResultados.length === 0) {
    listaResultado.append(palabraCopiar);
  } else {
    if (palabraCopiar.dataset.veces === "0") {
      listaResultado.append(palabraCopiar);
    } else {
      datosResultados.map(elemento => elemento.toLowerCase() === palabraCopiar.innerText.toLowerCase() ? i++ : i);
      if (i < palabraCopiar.dataset.veces) {
        listaResultado.append(palabraCopiar);
      }
    }
  }
}



