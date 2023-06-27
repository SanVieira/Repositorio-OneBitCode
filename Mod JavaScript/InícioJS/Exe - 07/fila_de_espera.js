let sair = false
const lista = []


do {
    let mensagem = ""
    for(let i = 0; i < lista.length; i++) {
        mensagem += (i + 1) + "º - " + lista[i] + "\n"
    }

    let paciente
    let opcao = prompt(
        "Lista atual: " +
        "\n"+ mensagem +
        "\n1 - Novo Paciente" +
        "\n2 - Consultar Paciente" +
        "\n3 - Sair"  
        )

    switch (opcao) {
        case "1":
            paciente = prompt("Insira o nome do paciente: ")
            lista.push(paciente)
            break
        
        case "2":
            paciente = lista.shift()
            alert("Paciente consultado: " + paciente)
            break
            
        case "3":
            alert("Finalizando programa...")
            sair = true
            break

        default:
            alert("Opção inválida. Tente novamente...")
    }
    
} while(sair !== true)
