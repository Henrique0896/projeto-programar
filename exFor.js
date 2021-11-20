//Receba 5 numeros e imprima o maior deles

//delaclarando variáveis
var valores = []
var maior

// recebe 5 numeros e grava no array os valores
for (let i = 0; i < 5; i++) {
    valores[i] = parseFloat(prompt("Digite um numero: "))
}

//Inicializo a variável maior com o primeiro número digitado
maior = valores[0]

//selecionar maior valor do array
for (let i = 0; i < 5; i++) {
    if (valores[i] > maior) {
        maior = valores[i]
    }
}

//escrever na tela o maior valor
alert("Maior valor é: " + maior)




