const produtos = [
    {
        nome: "notebook",
        preco: 2100
    },
    {
        nome: "smartphone",
        preco: 400
    }
]

const preco_real = produtos.map((p) => p.preco * 4)

console.log(preco_real)
