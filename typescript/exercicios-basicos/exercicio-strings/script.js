let nome = prompt("Qual seu nome completo?")

let size = nome.length

let segunda;

if (size>=2){
    segunda = nome[1]
} else {
    segunda = "Não possui segunda letra"
}

let indice = 0

let ultimas = nome[size-1]+nome[size-2]+nome[size-3]

let maisc = nome.toUpperCase()

let minisc = nome.toLowerCase()
document.body.innerHTML = `<p>Seu nome é: ${nome} <br>
Seu nome tem: ${size} letras <br>
A segunda letra do seu nome é: ${segunda}<br>
O ÍNDICE da primeira letra do seu nome é: ${indice} <br>
As 3 últimas letras do seu nome são: ${ultimas} <br>
Seu nome com letras maiúsculas: ${maisc} <br>
Seu nome com letras minúsculas: ${minisc} </p>`