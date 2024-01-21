// ---------- DIFERENCIAR VARIÁVEIS DE UMA FUNÇÃO DAQUELAS PASSADAS POR PARÂMETROS (SE TIVEREM O MESMO NOME) ----------

// function mostrarDados(nome, nota){
//     this.nome = nome
//     this.nota = nota

//     console.log('Nome: ' + nome)
//     console.log('Nota: ' + nota)
// }

// mostrarDados('Mirelle', 7)

// ---------- Arrow Function herda o this do escopo onde ela está sendo criada ----------

function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }

    this.dados_arrow = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

const al1 = new aluno('Mirelle', 80)
al1.dados_anonimo()
al1.dados_arrow()