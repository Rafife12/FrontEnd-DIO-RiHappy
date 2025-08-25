/* VARIAVEIS, OPERADORES E CONDICIONAIS */

/* declarando variaveis */
let variavel = 10;
variavel = 20;
/* imprimindo no teminal */
console.log(variavel);

/* constante */
const pi = 3.14;

/* operadores */
let soma = 10 + 10;
console.log(soma);

let subtracao = 10 - 10;
console.log(subtracao);

let multiplicacao = 10 * 10;
console.log(multiplicacao);

let divisao = 10 / 10;
console.log(divisao);

/* condicionais */
const camisaAzul = true;
const camisaAmarela = false;

/* 10 < 1
10 > 1
10 = 10
10 == '10' /* igual em valor */
/* 10 === 10 /* igual em valor e tipo */ 

const numero = 10
/* const numeroPar = (numero % 2) === 0; */
/* console.log(numeroPar); */

/* if...else */
if ((numero % 2) === 0) { /* se tivesse variavel numeroPar colocar ela aqui */
    console.log('Número par');
}else {
    console.log('Número ímpar')
}

/* negação ! */
/* if (!numeroPar) {
    console.log('Número ímpar');
}
 */

/* if...else if...else */
const numeroteste = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numeroteste === 0) {
    console.log('O número é inválido');
}else if (numeroteste === 5) {
    console.log('O número é inválido');
}else if (numeroDivisivelPor5) {
    console.log('Sim');
}else{
    console.log('Não');
}
