const veiculo1 = prompt("Primeiro veículo: ")
const x = prompt("Velocidade do primeiro veículo: ")
const veiculo2 = prompt("Segundo veículo: ")
const y = prompt("Velocidade do segundo veículo: ")

const velocidade1 = parseInt(x)
const velocidade2 = parseInt(y)

if (velocidade1 === velocidade2) {
    alert("Ambos têm a mesma velocidade!")
} else if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é o mais rápido!")
} else {
    alert(veiculo2 + " é o mais rápido!")
}
