const vagas = []
opcao = ""

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        // 1. nome, quantidade de candidatos
        textoFinal += indice + ". "
        textoFinal += vaga.nome 
        textoFinal += " (" + vaga.candidatos.length + " cadidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe o nome da vaga: ")
    const descricao = prompt("Informe a descrição da vaga: ")
    const dataLimite = prompt("Informe a data limite (dd/mm/aaaa): ")

    const confirmacao = confirm(
        "Salvar vaga?" +
        "\nNome: " + nome +
        "\nDescrição: " + descricao +
        "\nData limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso!")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga: ")

    if (indice >= vagas.length || indice < 0) {
        alert("Índice inválido")
        return
    }

    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite:" + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o índice da vaga desejada: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Inscrever " + candidato + " para a vaga " + indice + " ?" +
        "\nVaga: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada!")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga a ser excluída: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "? " + 
        "\nVaga: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

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
                listarVagas()
                break

            case "2":
                novaVaga()
                break

            case "3":
                exibirVaga()
                break

            case "4":
                inscreverCandidato()
                break

            case "5":
                excluirVaga()
                break

            case "6":
                alert("Finalizando programa...")
                break
            
            default: 
                alert("Opção inválida.")
        }

} while (opcao !== "6")