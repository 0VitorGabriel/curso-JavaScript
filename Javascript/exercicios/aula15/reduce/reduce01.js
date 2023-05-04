const produtos = [
    {
        nome: "notebook",
        preco: 2100
    },
    {
        nome: "smartphone",
        preco: 400
    },
    {
        nome: "carregador",
        preco: 1200
    }
]

const total = produtos.map(p => p.preco * 4).reduce((a, b) => a =+ b, 0)

console.log(total)