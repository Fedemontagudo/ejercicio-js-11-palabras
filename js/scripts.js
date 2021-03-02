const listaPalabras = document.querySelector(".lista-palabras");

const listaResultado = document.querySelector(".resultado");

const nCaracteres = document.querySelector(".contador-caracteres");

listaPalabras.addEventListener("click", (elemento) => {
  if (elemento.target !== listaPalabras) {
    const palabraCopiar = elemento.target.cloneNode(true);
    listaResultado.append(palabraCopiar);
    calcular(listaResultado);
  }
});

listaResultado.addEventListener("click", (elementoResultado) => {
  if (elementoResultado.target !== listaResultado) {
    elementoResultado.target.remove();
    calcular(listaResultado);
  }
});

const calcular = () => {
  const numeroPalabras = document.querySelectorAll(".resultado > li").length;
  document.querySelector(".contador-palabras").textContent = numeroPalabras;

  const numeroCaracteres = document.querySelectorAll("resultado > li");
  document.querySelectorAll(".contador-caracteres").textContent.length = numeroCaracteres;
  console.log(numeroCaracteres);
};
calcular();
