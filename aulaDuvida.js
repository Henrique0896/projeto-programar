/* Emiliana tem uma loja de roupas e esta precisando de um programa 
para ajudá-la a colocar preço nas peças novas que chegam à sua loja. 
As roupas chegam em diferentes quantidades conforme a demanda. 
A porcentagem de lucro dela varia conforme o tipo de roupa. 

Se for peças importadas ela tem 100% de lucro e se for peças 
nacionais ela tem 70% de lucro. 

Faça um programa para loja da 
Emiliana que vai automatizar o processo de colocar preço nas 
roupas que chegam.

 Dica: O programa deve receber o número de peças da entrega e 
 a partir disso, para cada peça, o programa vai perguntar se ela é 
 importada ou nacional e perguntar qual é o preço de custo da peça. 
 Ao final o programa deve mostrar uma lista de preços para venda.*/

const porcentagemPecaNacional = 0.7
const porcentagemPecaImportada = 1
var numeroPecas
var listaFinal = []
var i
numeroPecas = parseFloat(prompt("Informe o número de peças"))

for (i = 1; i <= numeroPecas; i++) {
    var precoCusto = parseFloat(prompt('Qual e o preço de custo da peça ' + i))
    var tipoPeca = prompt("Digite 1 para importada ou 2 para nacional")
    var precoVenda

    if (tipoPeca == "1") {
        listaFinal[i] = precoCusto + (precoCusto * porcentagemPecaImportada)
    } else if (tipoPeca == "2") {
        listaFinal[i] = precoCusto + (precoCusto * porcentagemPecaNacional)
    } else {
        alert("Entrada Inválida")
        break
    }
}

console.log(listaFinal)

