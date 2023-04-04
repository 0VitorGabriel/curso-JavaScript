const cursos = ['HTML', 'CSS', 'JavaScript', 'BootStrap', 'PHP', 'React']

let c = cursos.map((el, i) => {
    return '<div>' + el + '</div>'
})

console.log(c)