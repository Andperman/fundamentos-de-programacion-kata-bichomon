
//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

console.log(document.title);

let title = document.getElementById("gen-1");
console.log(title);

title.innerText ="Generasión 1 Pokimon";

//2. Cambia el color de fondo de la primera generación de Pokimon.

const infocardList = document.querySelector('.infocard-list');
infocardList.style.backgroundColor = 'lightgray';


//3. Imprime por consola la URL de la página.
const specificUrl = "https://andperman.github.io/fundamentos-de-programacion-kata-bichomon/";

console.log("URL de la página:", specificUrl)

//4. Imprime por consola el dominio de la página.
var dominio = window.location.hostname;
        
console.log("El dominio de esta página es: " + dominio);
//5. Imprime todos los nodos de imagen.
const imagenes = document.querySelectorAll('img');

console.log (imagenes)

//6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
//Situarnos donde está lo que quiero cmabiar
const change = document.querySelector('body > main > div:nth-child(6)');

// Slecciono lo que quiero cambiar que son las imágenes
const images = change.querySelectorAll('img');

// Voy recorriedo con forEach y cambio la imagen
images.forEach((img) => {
    img.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
});

console.log(change)


