/* Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos.
Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
números lidos. O número que encerrará a leitura será zero. */

var listaNumeros = []
var listaPares = []
var listaImpares = []
var totalPares = 0
var totalImpares = 0
var mediaPares
var mediaGeral

while (true) {
    let numeroDigitado = parseFloat(prompt("Informe um número positivo"));
    if (numeroDigitado > 0) {
        listaNumeros.push(numeroDigitado);
    } else {
        break
    }
}

for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 == 0) {
        listaPares.push(listaNumeros[i])
    } else {
        listaImpares.push(listaNumeros[i])
    }
}

for (let i = 0; i < listaPares.length; i++) {
    console.log(" ---- Iteração lista pares -----");
    console.log("valor total pares" + totalPares)
    console.log("valor do elemento na lista" + listaPares[i])
    totalPares = totalPares + listaPares[i]
}

for (let i = 0; i < listaImpares.length; i++) {
    totalImpares += listaImpares[i]
}

mediaPares = totalPares / listaPares.length
mediaGeral = (totalPares + totalImpares) / (listaPares.length + listaImpares.length)


document.write("Numeros Pares: " + listaPares.length +
    "<hr/>" + "Numeros Impares: " + listaImpares.length +
    "<hr/>" + "Media geral: " + mediaGeral + '<hr/>' +
    "<hr/>" + "Media pares: " + mediaPares + '<hr/>')






/*

while(numeroDigitado != 0){
    numeroDigitado = parseFloat(prompt("Informe um número positivo"));

    //verificar se numero é menor ou igual a zero
    while(numeroDigitado <= 0){
        numeroDigitado = parseFloat(prompt("Informe um número positivo diferente de zero"));

    }

    if(numeroDigita % 2 == 0){
        listaPares.push(numeroDigitado)
    }else{
        listaImpares.push(numeroDigitado)
    }
}

*/