const listaPalabras = document.querySelector(".lista-palabras");

const listaResultado = document.querySelector(".resultado");

listaPalabras.addEventListener("click", (elemento) => {
  const palabraCopiar = elemento.target.cloneNode(true);
  listaResultado.append(palabraCopiar);
  contarPalabras(listaResultado);
});

const contarPalabras = (variable) => variable.childElementCount;
