const listaPalabras = document.querySelector(".lista-palabras");

const listaResultado = document.querySelector(".resultado");

const nPalabras = document.querySelector(".contador-palabras");

listaPalabras.addEventListener("click", (elemento) => {
  if (elemento.target !== listaPalabras) {
    const palabraCopiar = elemento.target.cloneNode(true);
    if (listaResultado.children.length === 0) {
      palabraCopiar.textContent = primeraLetraMayus(palabraCopiar.textContent);
    }
    listaResultado.append(palabraCopiar);
    contarPalabras(listaResultado);
  }
});

listaResultado.addEventListener("click", (elementoResultado) => {
  if (elementoResultado.target !== listaResultado) {
    if (listaResultado.children[0] === elementoResultado.target
      && listaResultado.children.length > 1) {
      const palabraConMayuscula = listaResultado.children[1];
      palabraConMayuscula.textContent = primeraLetraMayus(palabraConMayuscula.textContent);
    }
    elementoResultado.target.remove();
    contarPalabras(listaResultado);
  }
});


function comprobar(elemento) {
  elemento.value === "" ? document.querySelector(".crear").disabled = true : document.querySelector(".crear").disabled = false;

  elemento.value.search(" ") !== -1 ? document.querySelector(".crear").disabled = true : document.querySelector(".crear").disabled = false;
}

const contarPalabras = (variable) => {
  const palabrasContadas = variable.childElementCount;
  nPalabras.textContent = palabrasContadas;
};

const primeraLetraMayus = (palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1);
