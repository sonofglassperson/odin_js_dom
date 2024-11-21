let input = document.querySelector('#newItem')
let addItem = document.querySelector('#addItem')
let list = document.querySelector('div ul')
let span = document.querySelector('div span')

input.focus();


input.addEventListener('input', (e) => {
    //this.value = input.value
    this.value = e.target.value;
    //console.log(input.value);
})


addItem.addEventListener('click', () => {
    const item = document.createElement('li');
    const deleteItem = document.createElement('button');
    const itemSpan = document.createElement('span')

    let insertedInput = input.value

    item.textContent = insertedInput
    itemSpan.setAttribute('style', 'margin-left:20px;')
    deleteItem.textContent = 'delete'


    item.appendChild(itemSpan)
    itemSpan.appendChild(deleteItem)
    list.appendChild(item)


    //deleteItem.onclick = () => list.removeChild(item)

    input.value = '';
    input.focus();
})

list.addEventListener('click', (e) => {
    console.log(e);
})


