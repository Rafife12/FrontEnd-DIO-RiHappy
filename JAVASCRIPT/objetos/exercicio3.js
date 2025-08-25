/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gastoMedioPorkm;
    constructor (marca, cor, gastaMedioPorkm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorkm = gastoMedioPorkm;
    }
}

calcularGastoDePercurso (distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastaMedioPorkm * precoCombustivel;
};
            
const uno = new Carro ('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));
const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso (70, 5));