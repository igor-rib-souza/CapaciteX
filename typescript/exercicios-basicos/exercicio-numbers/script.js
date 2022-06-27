let numero = prompt("Digite seu número:")

let raizQuad = numero**(1/2)

let notaNumb = (raizQuad.toExponential()=='NaN')

let prabaixo = Math.floor(numero)
let praCima = Math.ceil(numero)

let comDuas = parseInt(numero).toFixed(2)

document.body.innerHTML = `<p>Seu número é: ${numero}<br>
Raiz quadrada: ${raizQuad}<br>
É NaN: ${notaNumb}<br>
Arredondando pra cima: ${praCima}<br>
Arredondando pra baixo: ${prabaixo}<br>
Com duas casas decimais: ${comDuas}</p>`