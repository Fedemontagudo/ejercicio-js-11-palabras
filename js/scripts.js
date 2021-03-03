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

function comprobar(elemento) {
  elemento.value === "" ? document.querySelector(".crear").disabled = true : document.querySelector(".crear").disabled = false;

  elemento.value.search(" ") !== -1 ? document.querySelector(".crear").disabled = true : document.querySelector(".crear").disabled = false;

}

const contarPalabras = (variable) => {
  const palabrasContadas = variable.childElementCount;
  nPalabras.textContent = palabrasContadas;

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

