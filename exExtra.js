

var diaSemanaInt = prompt("Digite um número relacionado a um dia?")

var nomeDia

switch (diaSemanaInt) {
    case "2":
        nomeDia = "Segunda";
        break;
    case "3":
        nomeDia = "Terça";
        break;
    case "4":
        nomeDia = "Quarta";
        break;
    case "5":
        nomeDia = "Quinta";
        break;
    case "6":
        nomeDia = "Sexta";
        break;
    case "7":
        nomeDia = "Sábado";
        break;
    case "1":
        nomeDia = "Domingo";
        break;
    default:
        nomeDia = null
}

if (nomeDia == "Sábado" || nomeDia == "Domingo") {
    alert(nomeDia + " é final de semana")
} else if (nomeDia) {
    alert(nomeDia + " é dia de semana");
} else {
    alert("Número Inválido")
}