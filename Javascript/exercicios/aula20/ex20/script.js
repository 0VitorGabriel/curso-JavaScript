const ul = document.querySelector('ul')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        data.map(function (user) {
            const li = document.createElement('li')
            li.innerHTML = `${user.name} (${user.username})`
            ul.appendChild(li)
        })
    })
    .catch((err) => {
        console.log(err.message)
    })