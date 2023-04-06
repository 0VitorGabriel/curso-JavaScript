let pessoa = {
    nome: 'Mateus',
    idade: 29,
    falar: function() {
        console.log('olá, tudo bem!')
    },
    soma: function(first_number, second_number) {
        return first_number + second_number
    }
}

console.log(pessoa.nome)
console.log(pessoa.soma(1,1))
pessoa.falar()