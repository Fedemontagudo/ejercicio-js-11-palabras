const listaPalabras = document.querySelector(".lista-palabras");

const listaResultado = document.querySelector(".resultado");

listaPalabras.addEventListener("click", (elemento) => {
  const palabraCopiar = elemento.target.cloneNode(true);
  listaResultado.append(palabraCopiar);
});

function comprobar(elemento) {
  elemento.value === "" ? document.querySelector(".crear").disabled = true : document.querySelector(".crear").disabled = false;

  elemento.value.search(" ") !== -1 ? document.querySelector(".crear").disabled = true : document.querySelector(".crear").disabled = false;
}
