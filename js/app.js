"use strict";

//mensaje d bienvenida
const usuario = prompt("Hola, Cual es tu nombre?")
alert("Hola " + usuario + " nos divertimos un poco?");

//definiendo las preguntas
const preguntas = [
    "Mi nombre es Sheryl?",
    "Actualmente, soy estudiante de Ingeniería de Minas?",
    "Me esfuerzo por mejorar?",
    "Odio cocinar?",
];
//definiendo las respuestas
const respuestas = [
    "si", "no", "si", "no",
];
//validando las respuestas
let preguntasCorrectas = 0;
let preguntasIncorrectas = 0;

for (let index = 0; index < preguntas.length; index++) {
    const pregunta = preguntas[index];
    const respuesta = prompt(pregunta);
    if (respuesta.toLowerCase() == respuestas[index]) {
        preguntasCorrectas++;
        alert("Sigue así!");
    } else {
        preguntasIncorrectas++;
    }
}
alert("Preguntas correctas: " + preguntasCorrectas);
alert("Preguntas incorrectas: " + preguntasIncorrectas);

//mensaje d despedida
alert("Bueno " + usuario + " espero te haya divertido!");