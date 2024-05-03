alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

//colocar um alerta caso o número seja maior que 10 ou menor que 1

//se chute for igual ao número secreto
if(chute == numeroSecreto) {
       alert(`Boa! Você descobriu o número secreto ${numeroSecreto}`)

} else {
    alert('Você não acertou o número, tente novamente')
    
}