let num = [3,2,4,1]
num.sort()
num.push(30)

console.log(num)
console.log(num.length)
console.log(num[0])

let pos = num.indexOf(3)

if (pos === -1) {
    console.log('Valor não encontrado')
} else {
    console.log(pos)
}
