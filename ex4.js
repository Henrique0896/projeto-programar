
// preço maçã 
// 0.3 se comprar menos de 10
// 0.25 se comprar 10 até 19
// 0.2 se comprar 20 até 49
// 0.15 se comprar 50 ou mais


var numeroMacas = parseFloat(prompt("Qual o numero de maçãs compradas?"))

var precoMaca

if (numeroMacas < 10 && numeroMacas > 0) {
    precoMaca = 30
} else if (numeroMacas >= 10 && numeroMacas < 20) {
    precoMaca = 25
} else if (numeroMacas >= 20 && numeroMacas < 50) {
    precoMaca = 20
} else if (numeroMacas >= 50) {
    precoMaca = 15
} else if (numeroMacas < 0) {
    precoMaca = -1
}

if (precoMaca < 0) {
    alert("Numero digitado invalido")
} else {
    var resposta = numeroMacas * precoMaca
    alert("O preço a pagar " + resposta / 100)
}

