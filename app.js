alert('Boas vindas ao jogo do número secreto.');

let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

//se chute for igual ao número secreto
if (chute == numeroSecreto) {
    console.log('Isso aí! Você descobriu o número secreto (5)');
} else {
    console.log('Você errou :(');
}