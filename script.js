//1.Declare uma variável de nome weight
let weight;

//2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/*3.Declare uma variável e  atribua valores para cada um dos dados:

* name: String 
* age : Number (integer)
*stars: Number (float)
* isSubscribed: Booleans 
*/
let name = "Mayara"
let age  = 26
let stars = 4.5
let isSubscribed = true

/*
    4. A variável student abaixo é do que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 mostre no console a seguinte mensagem:
      <name> de idade <age> pesa <height> kg.

      Atenção, substitua <name> <age> e <height> pelos valores de cada propeiedade do objeto

*/

let student = {
  name : "Mayara",
  age : 26,
  height : 1.66,
  isSubscribed : true,
};
console.log(`${student.name} de idade ${student.age} com altura ${student.height} `)

/* 
  5.Declare uma variável de tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio 

*/

let students = []

/* 
 6. Reatribua valor para variável acima, colocando dentro o objeto studante da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
  student
]

console.log(students)

 
 // 7.Coloque no console o valor da posição zero do Array acima

  console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array Students 
*/
const luizPaulo = {
  name: 'Luiz Paulo',
  age: 32,
  height: 1.70,
  isSubscribed: true,
}

students = [
  student,
  luizPaulo
]
/* ou assim 
 students[1] = luizPaulo 
*/
console.log(students)

/* 
  9.Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
    
    console.log(a)
    var a = 1
*/
console.log(a)
var a = 1 //undefined

const body = document.querySelector('body')

body.style.backgroundColor = '#41E1D7'