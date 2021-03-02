const listaPalabras = document.querySelector(".lista-palabras");

const listaResultado = document.querySelector(".resultado");

const nCaracteres = document.querySelector(".contador-caracteres");

const mediaPalabras = document.querySelector(".contador-media");

listaPalabras.addEventListener("click", (elemento) => {
  if (elemento.target !== listaPalabras) {
    const palabraCopiar = elemento.target.cloneNode(true);
    if (listaResultado.children.length === 0) {
      palabraCopiar.textContent = primeraLetraMayus(palabraCopiar.textContent);
    }
    listaResultado.append(palabraCopiar);
    calcular(listaResultado);
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

  let longitudMedia = 0;
  longitudMedia = Math.round((contador / listaResultado.children.length) * 100) / 100;
  if (longitudMedia > 0) {
    mediaPalabras.textContent = longitudMedia;
  } else {
    mediaPalabras.textContent = 0;
  }

};

/*   Esto lo he dejado porque creo que es interesante, Mario queria que intentara hacerlo con el document.querySelectorAll
      const numeroCaracteres = document.querySelectorAll(".resultado > li");
      const caracteresNumero = numeroCaracteres.length.textContent;
      console.log(caracteresNumero);
    }; */
calcular();

const primeraLetraMayus = (palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1);
