const nome = prompt("Informe seu nome: ")
const sobrenome = prompt("Informe seu sobrenome: ")
const campoDeEstudo = prompt("Informe seu campo de estudo: ")
const anoDeNascimento = prompt("Informe seu ano de nascimento: ")

alert(
    "Recruta cadastrado com sucesso! \n" +
    "Nome: " + nome + " " + sobrenome + "\n" +
    "Campo de Estudo: " + campoDeEstudo + "\n" +
    "Idade que completa essa ano: " + (2023 - anoDeNascimento)
)