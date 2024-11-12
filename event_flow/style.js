
const child = document.querySelector('.child')
const parent = document.querySelector('.parent')

parent.setAttribute('style', 'background-color:red;')

document.addEventListener('click', () => {
    console.log('0. document')
}, {capture:true});


parent.addEventListener('click', () => {
    console.log('1. parent event listner - div')

}, {capture:true});

child.addEventListener('click', (event) => {
    console.log('2. child event listner - button')
    //Stops bubbling effect
    //event.stopPropagation()
});
