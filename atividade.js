/*
⦁ Crie um programa de cadastro de uma biblioteca (utilizando array como base de dados 
ex: baseDeLivros: [ob1, obj2,]).  O programa deve implementar as funcionalidades descritas abaixo:

(1) - Cadastrar;
(2) - Pesquisar;
(3) - Excluir;
(4) - Alterar; (desafio)
(5) - Filtrar livros por categoria
(0) - Sair;

O cadastro dos livros deve solicitar código, título, categoria. O programa deve respeitar as seguintes restrições:
⦁ Não se pode cadastrar um livro com mesmo código;
⦁ A pesquisa deve ser feita pelo código;
⦁ A exclusão deve ser feita pelo código do livro;
*/

const baseDeLivros = []

function executaMenu() {

    const resultado = prompt(`
    (1) - Cadastrar
    (2) - Pesquisar
    (3) - Excluir
    (4) - Alterar
    (5) - Filtrar livros por categoria
    (0) - Sair
    `)

    if (resultado == "1") {
        criarLivro()
    }

    if (resultado == "2") {
        pesquisaLivro()
    }

    if (resultado == "3") {
        excluirLivro()
    }

    if (resultado == "4") {
        alteraLivro()
    }

    if (resultado == "5") {
        filtrarCategoria()
    }

    if (resultado != "0") {
        executaMenu()
    }
}

function criarLivro() {

    let cod = prompt('Digite o código do livro')
    let isCodigo = true

    baseDeLivros.forEach(livro => {
        if (livro.codigo == cod) {
            alert('Código do livro já existe')
            isCodigo = false
        }
    })

    if (isCodigo) {
        const livro = {
            codigo: cod,
            titulo: prompt('Digite o título do livro'),
            categoria: prompt('Digite a categoria do livro'),
        }

        baseDeLivros.push(livro)
    }
    
}

function pesquisaLivro() {

    let resposta = prompt(`Digite as opções de pesquisa:

    (1) Código 
    (2) Título
    (3) Categoria
    `)

    if (resposta == '1') {

        let pesquisa = prompt('Digite o código do livro')
        let isThis = true

        baseDeLivros.forEach(livro => {
            if (livro.codigo == pesquisa) {
                alert(`O livro é: ${livro.titulo} - ${livro.categoria} - ${livro.codigo}`)
                isThis = false
            }
        })

        if (isThis) {
            alert('Livro não encontrado!')
        }
    }

    if (resposta == '2') {

        let pesquisa = prompt('Digite o título do livro')
        let isThis = true

        baseDeLivros.forEach(livro => {
            if (livro.titulo == pesquisa) {
                alert(`Esse é o livro: ${livro.titulo} - ${livro.categoria} - ${livro.codigo}`)
                isThis = false
            }
        })

        if (isThis) {
            alert('Título não encontrado!')
        }
    }

    if (resposta == '3') {

        let pesquisa = prompt('Digite a categoria do livro')
        let isThis = true

        baseDeLivros.forEach(livro => {
            if (livro.categoria == pesquisa) {
                alert(`Esse é o livro: ${livro.titulo} - ${livro.categoria} - ${livro.codigo}`)
                isThis = false
            }
        })

        if (isThis) {
            alert('Categoria não encontrada!')
        }
    }

}

function excluirLivro() {

    let cod = prompt('Digite o código do livro que deseja excluir:')
    let isThis = true
    baseDeLivros.forEach((livro, index) => {
        if (livro.codigo == cod) {
            baseDeLivros.splice(index, 1)
            isThis = false
        }
    })

    if (isThis) {
        alert('Livro não encontrado!')
    }
}

function alteraLivro() {

    let resposta = prompt(`Digite o código do livro que deseja alterar: `)
    let isThis = true

    baseDeLivros.forEach((livro, index) => {
        if (livro.codigo == resposta) {

            const newLivro = {
                codigo: prompt(`Digite o código do livro`, livro.codigo),
                titulo: prompt('Digite o título do livro', livro.titulo),
                categoria: prompt('Digite a categoria do livro', livro.categoria),
            }

            baseDeLivros[index] = newLivro
            isThis = false
        }
    })

    if (isThis) {
        alert('Código não existe!')
    }
}

function filtrarCategoria() {
    let pesquisa = prompt('Digite a categoria do livro')
    let isThis = true

    baseDeLivros.forEach(livro => {
        if (livro.categoria == pesquisa) {
            alert(`Esse é o livro: ${livro.titulo} - ${livro.categoria} - ${livro.codigo}`)
            isThis = false
        }
    })

    if (isThis) {
        alert('Categoria não encontrada!')
    }
}

executaMenu()