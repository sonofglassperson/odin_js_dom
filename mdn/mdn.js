let input = document.querySelector('#newItem')
let addItem = document.querySelector('#addItem')
let list = document.querySelector('div ul')
let span = document.querySelector('div span')

input.focus();


input.addEventListener('input', (e) => {
    this.value = e.target.value;
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

    input.value = '';
    input.focus();
})

//Event delegation
list.addEventListener('click', (e) => {
    target = e.target;
    if (target.tagName == 'BUTTON') {
        listItem = target.closest('li');
        list.removeChild(listItem)
    }
})


