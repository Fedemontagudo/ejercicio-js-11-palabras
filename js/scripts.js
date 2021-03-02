const listaPalabras = document.querySelector(".lista-palabras");

const listaResultado = document.querySelector(".resultado");

const nPalabras = document.querySelector(".contador-palabras");

listaPalabras.addEventListener("click", (elemento) => {
  const palabraCopiar = elemento.target.cloneNode(true);
  listaResultado.append(palabraCopiar);
  const palabrasContadas = contarPalabras(listaResultado);
  nPalabras.textContent = palabrasContadas;
});

const contarPalabras = (variable) => variable.childElementCount;
