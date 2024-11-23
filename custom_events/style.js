let number = document.querySelector('#number')

function changeNumber(n, c) {

    const numberEvent = new CustomEvent('changeNumber', {
        detail: {
            "number": n,
            "color": c
        }
    })

    number.dispatchEvent(numberEvent)
}

number.addEventListener('changeNumber', (e) => {
    number.innerText = e.detail.number;
    number.setAttribute('style', `color:${e.detail.color}`)
})