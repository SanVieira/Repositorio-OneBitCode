var dinheiroInicial = prompt("Insira a quantidade inicial em real: ")
var dinheiroAtual = parseFloat(dinheiroInicial)
var opcao
do {
     opcao = prompt(
        "Quantidade Atual: R$" + dinheiroAtual + "\n" +
        "\nO que você quer fazer agora? " +
        "\n1 - Adicionar dinheiro" +
        "\n2 - Retirar dinheiro" +
        "\n3 - Sair"
    )

    switch (opcao) {
        case "1":
            let quantidadeAdicionada_aux = prompt("Informe a quantidade a ser adicionada: ")
            let quantidadeAdicionada = parseFloat(quantidadeAdicionada_aux)
            dinheiroAtual += quantidadeAdicionada
            
            break
        case "2":
            let quantidadeRetirada_aux = prompt("Informe a quantidade a ser retirada: ")
            let quantidadeRetirada = parseFloat(quantidadeRetirada_aux)
            dinheiroAtual -= quantidadeRetirada
            break
        case "3":
            alert("Encerrando programa..." )
            break
        default:
            alert("Entrada inválida. Tente novamente.")
    }
} while (opcao !== "3") 