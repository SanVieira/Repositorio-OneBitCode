const jogador = prompt("Escreva o nome do jogador: ")
const poderDeAtaque_aux = prompt("Escreva o poder ataque:")

const poderDeAtaque = parseFloat(poderDeAtaque_aux)

const inimigo = prompt("Escreva o nome do alvo: ")
const pontosDeVidaInimigo_aux = prompt("Pontos de vida do alvo: ")
const poderDeDefesa_aux = prompt("Poder de defesa do alvo: ")

const pontosDeVidaInimigo = parseFloat(pontosDeVidaInimigo_aux)
const poderDeDefesa = parseFloat(poderDeDefesa_aux)

const escudo_aux = prompt("O alvo possui escudo? (S/N)")
var escudo

if (escudo_aux === "S" || escudo_aux === "s") {
    escudo = true
} else escudo = false

alert("Processando...")

var dano
if (poderDeAtaque > poderDeDefesa && escudo === false) {
    dano = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo === true) {
    dano = (poderDeAtaque - poderDeDefesa)/2
} else if (poderDeAtaque <= poderDeDefesa) {
    dano = 0
} else alert("Erro de processamento. Tente novamente...")

var pontosDeVidaInimigoAtual = pontosDeVidaInimigo - dano

alert(
    "Resultados: \n" +
    "\nJogador: " + jogador +
    "\nAtaque: " + poderDeAtaque +
    "\nDano Causado: " + dano +
    "\n" +
    "\nAlvo: " + inimigo +
    "\nDefesa: " + poderDeDefesa +
    "\nEscudo: " + escudo +
    "\nPontos de Vida: " + pontosDeVidaInimigoAtual + "/" + pontosDeVidaInimigo 
)