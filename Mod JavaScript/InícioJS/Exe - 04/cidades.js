const nome = prompt("Bem vindo! Informe seu nome: ")

alert("Prazer, " + nome + "!")
var visitouCidade = prompt("Já visitou alguma cidade? (sim/nao)")
var cidades = ""
var cidadesContador
var contador = 0

while (visitouCidade === "sim") {
    cidadesContador = prompt("Qual cidade?")
    cidades += cidadesContador + "\n"
    alert("Registrando...")
    contador ++
    visitouCidade = prompt("Visitou mais alguma? (sim/nao)")
}

if (contador === 0) {
    alert("Você não visitou nenhuma cidade ainda.")
} else if (contador === 1){
    alert(
        "Que legal, " + nome + "! Você visitou uma cidade:\n" +
        cidades
    )
} else {
    alert(
        "Que legal, " + nome + "! Você visitou " + contador + " cidades:\n" +
        cidades
    )
}