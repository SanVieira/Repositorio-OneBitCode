let opcao
const listaVagas = []


do {
    opcao = prompt(
        "Bem-vindo ao nosso site de recrutamento!" +
        "\nEscolha uma opção abaixo:" +
        "\n1 - Vagas disponíveis" + 
        "\n2 - Criar nova vaga" + 
        "\n3 - Visualizar vaga" + 
        "\n4 - Inscrever candidato" + 
        "\n5 - Excluir vaga" + 
        "\n6 - Sair" 
    )

        switch(opcao) {
            case "1":
                if (listaVagas.length > 0) {
                    for (let i = 0; i < listaVagas.length; i++) {
                        alert(
                            (i + 1) + ". " + listaVagas[i].nome +
                            "\nQuantidade de inscritos: " + listaVagas[i].numeroDeCandidatos
                        )
                    }
                } else alert("Nenhuma vaga disponível no momento...")
                break

            case "2":
                const vaga = {}

                vaga.nome = prompt("Insira o nome da vaga: ")
                vaga.descricao = prompt("Insira a descrição da vaga: ")
                vaga.data = prompt("Insira a data limite de inscrição: ")
                vaga.numeroDeCandidatos = 0
                vaga.candidatos = []

                const confirmacao = confirm(
                    "Salvar essa vaga?" +
                    "\nVaga: " + vaga.nome +
                    "\nDescrição: " + vaga.descricao +
                    "\nData limite: " + vaga.data 
                )

                if (confirmacao) {
                    listaVagas.push(vaga)
                    alert("Vaga aberta com sucesso!")
                } else alert("Voltando ao menu...")
                break

            case "3":
                let indiceDaVaga = parseInt(prompt("Informe o número da vaga: "))
                if (listaVagas[indiceDaVaga - 1]) {
                    let auxiliarCandidatos = ""
                    for(let i = 0; i < listaVagas[indiceDaVaga - 1].candidatos.length; i++) {
                        auxiliarCandidatos += "\n" + i + ". " + listaVagas[indiceDaVaga - 1].candidatos[i] 
                    }
                    
                    informacaoVaga(indiceDaVaga) 
                    alert(
                        "Quantidade de inscritos: " + (listaVagas[indiceDaVaga - 1].numeroDeCandidatos) +
                        "\nCadidatos: " + auxiliarCandidatos  
                        )
                } else alert("Entrada inválida ou vaga inexistente.")
                break

            case "4":
                let candidato = prompt("Insira o nome do candidato: ")
                let indiceDaVagaCandidatura = parseInt(prompt("Informe o número da vaga: "))
                if (listaVagas[indiceDaVagaCandidatura - 1]) {
                    const confirmacaoCanditatura = confirm(informacaoVaga())
                    if (confirmacaoCanditatura) {
                        listaVagas[indiceDaVagaCandidatura - 1].candidatos.push(candidato)
                    } else alert("Voltando ao menu...")
                } else alert("Entrada inválida ou vaga inexistente.")
                break

            case "6":
                alert("Finalizando programa...")
        }

} while (opcao !== "6")



//Funções ----------------------------- //
function informacaoVaga(indice) {
    let i = indice
    alert(
        "Vaga: " + listaVagas[i].nome +
        "\nDescrição: " + listaVagas[i].descricao +
        "\nData limite para inscrição: " + listaVagas[i].data
    )
}
