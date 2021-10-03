const listaDePecas = ['Peca de teste', 'AB', 'peca B']

console.log('quantidade de caracteres')

if (listaDePecas.length <= 10) {
    console.log('as peças podem ser cadastradas');
}

console.log('quantidade de caracteres')

for (let index = 0; index < listaDePecas.length; index++) {
    const pecaatual = listaDePecas[index];
        if (pecaatual.length < 3) {
            console.log(pecaatual + ': a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.')
        } else {
            console.log(pecaatual + ': a peça pode ser cadastrada.')
        }
}

console.log('peso da peça')

const pesoDaPecaEmGramas = 50;

if (pesoDaPecaEmGramas >= 100) {
    console.log('peso suficiente.')
} else {
    console.log('valor insuficiente')
}