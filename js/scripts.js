const listaPalabras = document.querySelector(".lista-palabras");

const listaResultado = document.querySelector(".resultado");

const nPalabras = document.querySelector(".contador-palabras");

const nCaracteres = document.querySelector(".contador-caracteres");

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



const calcular = () => {
  const liListaResultado = document.querySelectorAll(".resultado > li")
  for (const cosa of liListaResultado);



