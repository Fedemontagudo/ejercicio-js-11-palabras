const listaPalabras = document.querySelector(".lista-palabras");

const listaResultado = document.querySelector(".resultado");

const nPalabras = document.querySelector(".contador-palabras");

listaPalabras.addEventListener("click", (elemento) => {
  if (elemento.target !== listaPalabras) {
    const palabraCopiar = elemento.target.cloneNode(true);
    listaResultado.append(palabraCopiar);
    contarPalabras(listaResultado);
  }
});

listaResultado.addEventListener("click", (elementoResultado) => {
  if (elementoResultado.target !== listaResultado) {
    elementoResultado.target.remove();
    contarPalabras(listaResultado);
  }
});

const contarPalabras = (variable) => {
  const palabrasContadas = variable.childElementCount;
  nPalabras.textContent = palabrasContadas;
};
