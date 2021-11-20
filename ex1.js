/* Escreva um programa para ler 2 valores (considere que não serão
informados valores iguais) e escrever o maior deles. */

var valores = []

valores[0] = parseFloat(prompt("Digite o valor 1"))
valores[1] = parseFloat(prompt("Digite o valor 2"))

if (valores[0] <= valores[1]) {
    alert("O menor valor é o " + valores[0])
} else {
    alert("O maior valor é o " + valores[1])
}
