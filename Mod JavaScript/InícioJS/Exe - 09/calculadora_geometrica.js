let opcao
const pi = 3.14

function areaTriangulo(base, altura) {
    let area = base * altura / 2
    return area
}

function areaRetangulo(base, altura) {
    let area = base * altura
    return area
}

function areaQuadrado(lado) {
    let area = areaRetangulo(lado, lado)
    return area
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    let area = (baseMaior + baseMenor) * altura / 2
    return area
}

function areaCirculo(raio) {
    let area = pi * raio * raio
    return area
}

do {
    opcao = prompt(
        "Bem vindo! O que deseja calcular no momento?\n" +
        "\n1 - Área do Triângulo" + 
        "\n2 - Área do Retângulo" + 
        "\n3 - Área do Quadrado" + 
        "\n4 - Área do Trapézio" + 
        "\n5 - Área do Círculo" + 
        "\n" +
        "\n6 - Sair do programa"
    )

    switch(opcao) {
        case "1":
            let base_triangulo = parseFloat(prompt("Base do triângulo: "))
            let altura_triangulo = parseFloat(prompt("Altura do triângulo: "))
            alert("Resultado: " + areaTriangulo(base_triangulo, altura_triangulo))
            break
            
        case "2":
            let base_retangulo = parseFloat(prompt("Base do retângulo: "))
            let altura_retangulo = parseFloat(prompt("Altura do retângulo: "))
            alert("Resultado: " + areaRetangulo(base_retangulo, altura_retangulo))
            break
            
        case "3":
            let lado_quadrado = parseFloat(prompt("Lado do quadrado: "))
            alert("Resultado: " + areaQuadrado(lado_quadrado))
            break
            
        case "4":
            let baseMaior_trapezio = parseFloat(prompt("Base Maior do trapézio: "))
            let baseMenor_trapezio = parseFloat(prompt("Base Menor do trapézio: "))
            let altura_trapezio = parseFloat(prompt("Altura do trapézio: "))
            alert("Resultado: " + areaTrapezio(baseMaior_trapezio, baseMenor_trapezio, altura_trapezio))
            break
            
        case "5":
            let raio_circulo = parseFloat(prompt("Raio do círculo: "))
            alert("Resultado: " + areaCirculo(raio_circulo))
            break
        
        case "6":
            alert("Finalizando programa...")
            break
        
        default:
            alert("Opção inválida. Tente novamente...")
    }

} while (opcao !== "6")