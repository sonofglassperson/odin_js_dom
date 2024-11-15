const parent = document.querySelector('.nav')
const button = document.querySelector('#button')
let c = 0;

button.addEventListener('click', () => {
    ++c
    const navLink = document.createElement('li')
    const anchor = document.createElement('a')
    anchor.setAttribute('id', `newLink ${c}`)
    anchor.setAttribute('href', '')
    anchor.innerText = `New Link Added ${c}`
    navLink.appendChild(anchor)
    parent.appendChild(navLink);
})

parent.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.id) {
        console.log(e.target.id);
    } else {
        console.log(e.target.parentElement.id);
    }
})