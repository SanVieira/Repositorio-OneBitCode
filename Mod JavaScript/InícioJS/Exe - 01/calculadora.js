const entrada1 = prompt("Insira o primeiro número: ")
const entrada2 = prompt("Insira o segundo número: ")

const num1 = parseFloat(entrada1)
const num2 = parseFloat(entrada2)

alert(
    "Entrada 1: " + num1 + "  ||  " + "Entrada 2: " + num2 + "\n\n" +
    "Soma: " + (num1 + num2) + "\n" +
    "Subtração: " + (num1 - num2) + "\n" +
    "Multiplicação: " + (num1 * num2) + "\n" +
    "Divisão: " + (num1 / num2)
)
