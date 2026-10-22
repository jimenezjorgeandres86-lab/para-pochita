"use strict";

// Elementos de la página
const comenzar = document.getElementById("comenzar");
const mensajes = document.getElementById("mensajes");
const sorpresa = document.getElementById("sorpresa");
const cajaMensaje = document.getElementById("caja-mensaje");
const abrirSorpresa = document.getElementById("abrir-sorpresa");
const lluviaCorazones = document.getElementById("lluvia-corazones");
const contenedorCorazones = document.getElementById("corazones");

// Mensajes personalizados para Pochita
const textos = {
    gracias:
        "Pochita, gracias por ser esa personita que, con su forma de ser, puede hacer más bonito un día cualquiera. A veces no lo digo, pero valoro mucho tenerte en mi vida. 🌸",

    amistad:
        "Las amistades especiales no se miden por cuánto tiempo llevamos conociéndonos, sino por lo que significan para nosotros. Quiero que sepas que nuestra amistad tiene un lugar muy bonito en mi corazón. 🫶",

    sonrisa:
        "Nunca olvides lo mucho que vales, Pochita. Ojalá la vida te regale tantas razones para sonreír como las que tú puedes regalarles a quienes te rodean. Mereces cosas muy bonitas. ✨"
};

// Mostrar la sección de mensajes
if (comenzar && mensajes) {
    comenzar.addEventListener("click", () => {
        mensajes.classList.remove("oculto");
        comenzar.classList.add("oculto");

        mensajes.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        crearCorazones(12);
    });
}

// Mostrar los mensajes de cada botón
document.querySelectorAll("[data-mensaje]").forEach((boton) => {
    boton.addEventListener("click", () => {
        const clave = boton.dataset.mensaje;

        if (textos[clave] && cajaMensaje) {
            cajaMensaje.textContent = textos[clave];

            cajaMensaje.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(8px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 450,
                    easing: "ease-out"
                }
            );

            crearCorazones(5);
        }
    });
});

// Mostrar la sorpresa final
if (abrirSorpresa && sorpresa) {
    abrirSorpresa.addEventListener("click", () => {
        sorpresa.classList.remove("oculto");
        abrirSorpresa.classList.add("oculto");

        crearCorazones(25);

        sorpresa.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

// Crear corazones animados
function crearCorazones(cantidad) {
    if (!contenedorCorazones) return;

    const simbolos = ["💗", "💕", "💖", "🌸", "💘"];

    for (let i = 0; i < cantidad; i++) {
        const corazon = document.createElement("span");

        corazon.className = "corazon-flotante";

        corazon.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.fontSize = 16 + Math.random() * 22 + "px";
        corazon.style.animationDuration = 3 + Math.random() * 4 + "s";
        corazon.style.animationDelay = Math.random() * 0.8 + "s";

        contenedorCorazones.appendChild(corazon);

        corazon.addEventListener("animationend", () => {
            corazon.remove();
        });
    }
}

// Corazones ambientales
crearCorazones(8);

setInterval(() => {
    crearCorazones(1);
}, 1200);

// Lluvia especial de corazones
if (lluviaCorazones) {
    lluviaCorazones.addEventListener("click", () => {
        crearCorazones(70);
    });
}