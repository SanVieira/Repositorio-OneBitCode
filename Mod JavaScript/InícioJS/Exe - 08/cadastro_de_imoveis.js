var sair = false
const registroDeImoveis = []


do {
    let quantidadeDeImoveis = registroDeImoveis.length

    let opcao = prompt(
        "Quantidade atual de imóveis: " + quantidadeDeImoveis + 
        "\n" + 
        "\n1 - Cadastrar Imóvel" +
        "\n2 - Mostrar todos os Imóveis" +
        "\n3 - Sair"
    )

    switch(opcao) {
        case "1":
            const imovel = {}

            imovel.propietario = prompt("Nome do proprietário: ")
            imovel.quartos = prompt("Quantidade de quartos: ")
            imovel.banheiros = prompt("Quantidade de banheiros: ")
            imovel.garagem = prompt("Possui garagem? (Sim/Não): ")

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.propietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nGaragem: " + imovel.garagem
            )

            if(confirmacao) {
                registroDeImoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Voltando ao menu...")    
            }
            break
        
        case "2":
            for (let i = 0; i < registroDeImoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + registroDeImoveis[i].propietario +
                    "\nQuartos: " + registroDeImoveis[i].quartos +
                    "\nBanheiros: " + registroDeImoveis[i].banheiros +
                    "\nGaragem: " + registroDeImoveis[i].garagem
                )
            }
            break

        case "3":
            alert("Finalizando programa...")
            sair = true
            break

        default:
            alert("Opção inválida. Tente novamente...")
    }


} while(sair === false)