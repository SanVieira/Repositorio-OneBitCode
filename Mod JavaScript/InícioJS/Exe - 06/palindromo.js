const palavra = prompt("Informe uma palavra e descubra se ela é um palíndromo: ")
var palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) { 
    alert(
        "Essa palavra é um palíndromo: \n" +
        palavra + " == " + palavraInvertida
    )
} else {
    alert(
        "Essa palavra não é um palíndromo: \n" +
        palavra + " != " + palavraInvertida
    )
}