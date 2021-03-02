const listaPalabras = document.querySelector(".lista-palabras");

const listaResultado = document.querySelector(".resultado");

listaPalabras.addEventListener("click", (elemento) => {
  const palabraCopiar = elemento.target.cloneNode(true);
  listaResultado.append(palabraCopiar);
});

document.querySelector(".nueva-palabra").addEventListener("change", (elemento) => {
  //FIX - Al borrar se desactiva el boton.

  document.querySelector(".crear").disabled = elemento.target.value === "";

  document.querySelector(".crear").disabled = elemento.target.value.includes(" ");
});

document.querySelector(".crear").addEventListener("click", (elemento) => {
  const palabrasLi = Array.from(document.querySelectorAll(".lista-palabras>li"));
  const palabras = pasarArray(palabrasLi);

  let prueba = palabras.some(palabra => palabra.toLowerCase() === document.querySelector(".nueva-palabra").value.toLowerCase()) ? console.log("Palabra repetida") : nuevoLi();
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

