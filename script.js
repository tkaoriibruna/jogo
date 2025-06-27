let quantidadeTexto = prompt("Olá! Quantos valores você quer usar para calcular a média?");
let quantidadeNumeros = parseInt(quantidadeTexto);

let total = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    let valorDigitado = prompt("Digite um número:");
    let numero = parseInt(valorDigitado);
    total += numero;
}

let resultadoMedia = total / quantidadeNumeros;
console.log("O resultado da média é: " + resultadoMedia);
