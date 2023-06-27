var resultados
var armazenamento = ""
var entradaValida = false

do {
    var numeroEscolhido = prompt(
        "Robô da Tabuada!\n" +
        "Escolha um número entre 1 e 20 para o cálculo: "
        )
    numeroEscolhido = parseFloat(numeroEscolhido)
    
    if (numeroEscolhido >= 1 && numeroEscolhido <= 20) {
        entradaValida = true
        for (let i = 1; i <= 20; i++) {
            resultados = numeroEscolhido * i
            armazenamento += resultados + "\n"
        }
        alert("Resultados: \n" + armazenamento )
    } else alert("Entrada inválida")
} while (entradaValida === false)

alert("Encenrrando programa...")

