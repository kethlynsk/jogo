const prompt = require("prompt-sync")();

const {
    criar,
    atualizar,
    listar,
    remover
} = require("./jogos.js")

while(true){
    console.log(`
    1. CRIAR
    2. LISTAR
    3. ATUALIZAR
    4. REMOVER
    5. SAIR`)

    const opcao = parseInt(prompt("Escolha sua opção: "))

    switch (opcao) {
        case 1:
        criar();
        break;

        case 2:
        listar();    
        break;

        case 3:
        atualizar();    
        break;

        case 4:
        remover();
        break;

        case 5:
        process.exit();
        break;
    
        default:
            console.log("Opção inválida")
            break;
    }
}