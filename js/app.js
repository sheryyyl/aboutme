"use strict";

//mensaje de bienvenida
const usuario = prompt("Hola, ¿Cuál es tu nombre?");
alert("Hola " + usuario + ", ¿nos divertimos un poco?");

//definiendo las preguntas
const preguntas = [
    "¿Mi nombre es Sheryl?",
    "¿Actualmente, soy estudiante de Ingeniería de Minas?",
    "¿Me esfuerzo por mejorar?",
    "¿Odio cocinar?",
];

//definiendo las respuestas
const respuestas = [
    "si", "no", "si", "no",
];

//variables para contar respuestas correctas
let preguntasCorrectas = 0;
let preguntasIncorrectas = 0;

//validando las respuestas
for (let index = 0; index < preguntas.length; index++) {
    const pregunta = preguntas[index];
    const respuesta = prompt(pregunta);
    if (respuesta.toLowerCase() === respuestas[index]) {
        preguntasCorrectas++;
        alert("¡Sigue así!");
    } else {
        preguntasIncorrectas++;
    }
}

//llamando a la 6ta pregunta
adivinar();

//llamando a la 7ma pregunta
adivinarFruta();

//mensaje de despedida y mostrando el total de respuestas correctas
alert("Bueno " + usuario + ", espero te hayas divertido. Respondiste correctamente a " + preguntasCorrectas + " de 7 preguntas.");

function adivinar() {
    const correcto = 7; // Número por adivinar
    let intentos = 4;

    while (intentos > 0) {
        const estimacion = prompt("¿Cuántas películas crees que he visto?");
        if (estimacion == correcto) {
            alert("¡Asombroso!, adivinaste el número");
            preguntasCorrectas++; // Aumenta si adivina correctamente
            return;
        } else if (estimacion > correcto) {
            alert("Te pasaste");
        } else {
            alert("¡Vi más!");
        }

        intentos--;

        if (intentos === 0) {
            alert("Se acabaron los intentos... realmente vi " + correcto + " películas");
        } else {
            alert("Te sobran " + intentos + " intentos, ¡Tú puedes!");
        }
    }
}

function adivinarFruta() {
    const frutasCorrectas = ["manzana", "plátano", "naranja", "fresa", "kiwi"];
    let intentos = 6;

    while (intentos > 0) {
        const respuesta = prompt("¡Adivina una de mis frutas favoritas!").toLowerCase();
        let encontrada = false;

        for (let index = 0; index < frutasCorrectas.length; index++) {
            if (frutasCorrectas[index] === respuesta) {
                alert("¡Bien! Has adivinado una de mis frutas favoritas: " + respuesta);
                preguntasCorrectas++; // Aumenta si adivina correctamente
                encontrada = true;
                break;
            }
        }

        if (encontrada) {
            break;
        } else {
            intentos--;
            alert(intentos > 0 ? "Ni cerca... Te quedan " + intentos + " intentos." : "Se acabaron los intentos... Mis frutas favoritas son: " + frutasCorrectas.join(", "));
        }
    }
}
