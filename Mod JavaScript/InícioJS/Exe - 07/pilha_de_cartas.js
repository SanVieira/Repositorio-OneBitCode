let sair = false
const pilha = []


do {
    quantidadeCartas = 0
    for(let i = 0; i < pilha.length; i++) {
        quantidadeCartas ++
    }

    let carta
    let opcao = prompt(
        "Quantidade atual de cartas: " + quantidadeCartas +
        "\n" +
        "\n1 - Adicionar uma carta" + 
        "\n2 - Puxar uma carta" +
        "\n3 - Sair"
    )
    
    switch (opcao) {
        case "1":
            carta = prompt("Insira o nome da carta: ")
            pilha.push(carta)
            break

        case "2":
            if (quantidadeCartas <= 0) {
                quantidadeCartas = 0
                alert("Sem cartas na pilha...")
            } else {
                carta = pilha.pop()
                alert("Carta puxada: " + carta)
            }
            break

        case "3":
            alert("Finalizando programa...")
            sair = true
            break

        default:
            alert("Opção inválida. Tente novamente...")

    }
} while (sair === false)