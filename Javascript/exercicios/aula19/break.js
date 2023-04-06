let n = 0
let max = 10
let pares = 0

for (let i = n; i < max; i++) {
    console.log('CFB cursos - ' + i)
    if (i % 2 !== 0) {
        continue
    }
    pares++
}

console.log('quantidade de pares: ' + pares)
console.log('fim do programa')