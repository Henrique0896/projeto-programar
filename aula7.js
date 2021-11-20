//  ---- FUNCTION ------ 

function media(listaNumeros) {
    var total = 0
    for (numero in listaNumeros) {
        total = total + numero
    }
    return total / listaNumeros.length
}


var precos = [10, 20, 30]
var precosPromocao = [100, 5, 90, 80]


mediaPrecoPromocao = media(precosPromocao)
mediaPrecos = media(precos)


alert("Média Precos Promocao:" + mediaPrecoPromocao)
alert("Média precos:" + mediaPrecos)




// function mensagem(nome, turno) {
//     if (turno == "manha") {
//         alert("Bom dia " + nome)
//     } else if (turno == "tarde") {
//         alert("Boa tarde " + nome)
//     } else {
//         alert("Boa noite " + nome)

//     }
// }


// mensagem("Henrique", "manha")
// mensagem("Vini", "tarde")
// mensagem("Aluno", "noite")






