const prompt = require("prompt-sync")();

const jogos = []

const validar_indice = (indice) => indice >= 0 && indice < jogos.length

const modelo = () => {
    const nome = prompt("Nome do jogo: ")
    const ano_lancamento = prompt("Ano de lançamento: ")
    const duracao = prompt("Duração média do jogo: ")
    const preco = prompt("Preço do jogo: ")
    const estudio = prompt("Estudio que fez o jogo: ")
    let sequencia = -1
    if(listar()){
    sequencia = prompt("Sequencia do jogo: ... Digite 0 se não houver") -1 }

    if(
        nome != "" &&
        ano_lancamento >= 1962 && ano_lancamento <= 2024 &&
        duracao > 0 &&
        preco == 0 &&
        estudio != "" &&
        ((sequencia >= 0 && sequencia < jogos.length) || jogos.length == 0)
    ){
        return
        nome,
        ano_lancamento,
        duracao,
        preco,
        estudio,
        sequencia

    }else{
        console.log("Dados invalidos")
    }
}

const criar = () => {
    const jogo = modelo()
    if(jogo!= undefined){
        jogos.push(jogo)
        console.log("Jogo cadastrado com sucesso.")
    }
}

const listar = () => {
    if(jogos.length == 0) {
        console.log("Nenhum jogo encontrado")
        return false
        }else{
        jogos.forEach((jogo, indice) => {
            console.log(`
            ${indice + 1}
            Nome: ${jogos.nome}
            Ano de lançamento: ${jogos.ano_lancamento}
            Duração: ${jogos.duracao}
            Preço: ${jogos.preco}
            Estudio: ${jogos.estudio}
            Sequencia: ${jogos.sequencia}`)
        })
        return true
    }
}

const atualizar = () => {
    if (!listar()){
        return
    }

    const indice = prompt("Qual indice deseja atualizar") -1;
    const jogo = modelo()
    if(
        jogo!= undefined &&
        validar_indice(indice)
    ){
        jogos[indice] = jogo
        console.log("Atualizado com sucesso")
    }else{
        console.log("Indice inválido")
    }

}

const remover = () => {
    if(!listar()){
        return
    }

    const indice = prompt("Qual indice você deseja remover?")

    if(validar_indice(indice)){
        jogos.splice(indice, 1)
        console.log("Removido")
    }else{
        console.log("Falha ao remover  ")
    }

}

modules.exports = {
    criar,
    listar,
    atualizar,
    remover
}