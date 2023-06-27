var opcao

alert("Bem vindo!")

do {
    opcao = prompt(
        "Escolha uma opção: \n" +
        "\n1 - Primeira opção" + 
        "\n2 - Segunda opção" + 
        "\n3 - Terceira opção" + 
        "\n4 - Quarta opção" + 
        "\n5 - Encerrar programa\n" 
    )

    switch (opcao) {
        case "1":
            alert("Você escolheu a primeira opção!")
            break   
        case "2":
            alert("Você escolheu a segunda opção!")
            break
        case "3":
            alert("Você escolheu a terceira opção!")
            break
        case "4":
            alert("Você escolheu a quarta opção!")
            break
        case "5":
            alert("Entendido! Encerrando programa...")
            break
        default:
            alert("Entrada inválida. Tente novamente.")
            break
    }
} while (opcao !== "5")