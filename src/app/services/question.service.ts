import { Injectable } from "@angular/core";
import { Question } from "../models/questions";


@Injectable()
export class QuestionService{
  public questions: Question[]

  constructor() {
    this.questions = [
      new Question("Quien descubrio America", 
      {
        "A": "Cristobal Colon",
        "B": "George Washington",
        "C": "Pablo Motos",
      }, 
      "A"),
      new Question("Cuales son los 3 lenguajes principales del desarrollo Frontend", 
      {
        "A": "PHP, CSS y Python",
        "B": "Ruby, Rust, JavaScript",
        "C": "HTML, CSS y JavaScript",
      }, 
      "C"),
      new Question("Cuanto pesa una barra olimpica de competicion", 
      {
        "A": "18 kg",
        "B": "20 kg",
        "C": "15 kg",
      }, 
      "B"),
      new Question("Que significa RAM", 
      {
        "A": "Ramon Antonio Martinez",
        "B": "Random Access Memory",
        "C": "Rico Arroz Mexicano",
      }, 
      "B"),
      new Question("Quien es Messi", 
      {
        "A": "El mejor futbolista de la historia",
        "B": "El mejor tenista de la historia",
        "C": "Un taquero",
      }, 
      "A"),
      new Question("Cual es el valor de x: 3x + 2 = 2x - 1", 
      {
        "A": "15",
        "B": "1",
        "C": "-3",
      }, 
      "C"),
      new Question("Para que sirve una integral definida", 
      {
        "A": "Para calcular el maximo de una funcion",
        "B": "Hallar el area bajo una funcion de un punto a otro",
        "C": "Pablo Motos",
      }, 
      "B"),
      new Question("Que es una derivada", 
      {
        "A": "La tangente de la recta en un punto de la funcion",
        "B": "Un circulo de radio 3.14",
        "C": "Pablo Motos en taparrabos",
      }, 
      "A"),
      new Question("Que sucede si te sacan roja en futbol", 
      {
        "A": "Tienes que hacer 20 flexiones",
        "B": "Te expulsan del partido y del partido siguiente",
        "C": "El arbitro se va",
      }, 
      "B"),
      new Question("Cual es el simbolo del oro en la tabla periodica", 
      {
        "A": "Co",
        "B": "Au",
        "C": "No se",
      }, 
      "B"),
      new Question("Hola", 
      {
        "A": "Que te jodan",
        "B": "Hola que tal",
        "C": "Ayer se me rompio la uña",
      }, 
      "B"),
    ]
  }
}