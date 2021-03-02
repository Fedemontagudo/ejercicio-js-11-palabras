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

  let contador = 0;
  const resultado = document.querySelectorAll(".resultado > li");
  for (const cont of resultado) {
    if (cont.textContent !== null) {
      contador += cont.textContent.length;
    } else { contador = 0; }
  }
  nCaracteres.textContent = contador;
};

/*   Esto lo he dejado porque creo que es interesante, Mario queria que intentara hacerlo con el document.querySelectorAll
      const numeroCaracteres = document.querySelectorAll(".resultado > li");
      const caracteresNumero = numeroCaracteres.length.textContent;
      console.log(caracteresNumero);
    }; */
calcular();
