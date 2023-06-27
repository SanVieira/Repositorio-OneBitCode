const medida_aux = prompt("Insira um valor, em metros, a ser convertido: ")
var medida = parseFloat(medida_aux)
var resultado

const unidadeDeMedida = prompt(
    "Agora escolha para que unidade você quer converter seu valor: \n" +
    "mm  -  Milímetro\n" +
    "cm  -  Centímetro\n" +
    "dm  -  Decímetro\n" +
    "dam -  Decâmetro\n" +
    "hm  -  Hectômetro\n" +
    "km  -  Quilômetro\n"
)

switch (unidadeDeMedida) {
    case "mm":
        resultado = medida*1000
        alert(
            "Você converteu " + medida + "m\n\n" +
            "Aqui está resultado: \n" +
            resultado + "" + unidadeDeMedida
        )
        break
      
    case "cm":
        resultado = medida*100
        alert(
            "Você converteu " + medida + "m\n\n" +
            "Aqui está resultado: \n" +
            resultado + "" + unidadeDeMedida
        )
        break
      
    case "dm":
        resultado = medida*10
        alert(
            "Você converteu " + medida + "m\n\n" +
            "Aqui está resultado: \n" +
            resultado + "" + unidadeDeMedida
        )
        break
       
    case "dam":
        resultado = medida/10
        alert(
            "Você converteu " + medida + "m\n\n" +
            "Aqui está resultado: \n" +
            resultado + "" + unidadeDeMedida
        )
        break
    
    case "hm":
        resultado = medida/100
        alert(
            "Você converteu " + medida + "m\n\n" +
            "Aqui está resultado: \n" +
            resultado + "" + unidadeDeMedida
        )
        break
    
    case "km":
        resultado = medida/1000
        alert(
            "Você converteu " + medida + "m\n\n" +
            "Aqui está resultado: \n" +
            resultado + "" + unidadeDeMedida
        )
        break  
    
    default:
        alert("Opção inválida. Tente novamente...")
}
