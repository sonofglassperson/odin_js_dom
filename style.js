let container = document.querySelector('#container')
let para = document.createElement('p')
para.textContent = 'rover'
para.setAttribute('style', 'color:red;')
container.appendChild(para)

let h3 = document.createElement('h3')
h3.textContent = 'I’m a blue h3!'
h3.setAttribute('style', 'color:blue;')
container.appendChild(h3)

let div = document.createElement('div')
div.setAttribute('style', 'width:50%; background-color:purple; border:solid black 2px; margin: 0 auto;')

let h1 = document.createElement('h1')
h1.textContent = `I'm in a div`
div.appendChild(h1)

let paraDiv = document.createElement('p')
paraDiv.textContent = `Me too!`
div.appendChild(paraDiv)

container.appendChild(div)

let btn = document.querySelector('#btn')
btn.addEventListener('click', (e) => {
    alert('Hello  world!')
    console.log(e.target.textContent);
    let l = e.target
    l.textContent = 'fuck nigga';
    l.setAttribute('style', 'color:red; background-color:purple;')
    console.log(l);
    
});

let allBtns = document.querySelectorAll('.button-container > button')
console.log(allBtns)

allBtns.forEach( (button) => {
    button.setAttribute('style', 'display:block; margin-bottom: 10px;')
    button.addEventListener('dblclick', (e)=> {
        alert(button.id)
        console.log(e.target.id);
        console.log(e.target.textContent);
        
    })
})