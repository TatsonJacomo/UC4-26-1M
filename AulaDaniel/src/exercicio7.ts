//7.Escreva uma função que nunca retorna (never), lançando um erro.

function erro(): never {
    throw new Error('Algo de errado não está certo!')
}

erro()