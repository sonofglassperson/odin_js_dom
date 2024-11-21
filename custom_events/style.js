let number = document.querySelector('#number')

number.addEventListener("changeNumber", (e) => {
    // e.detail gets data from event object
    number.innerText = e.detail.number;
    number.setAttribute('style', `color:${e.detail.color}`)
});

function changeNumber(n, c) {
    // listen for custom event
    // create function
    // setup detail object with data
    // dispatch event
    const cEvent = new CustomEvent('changeNumber', {
        detail: {
            number: n,
            color: c
        }
    });

    number.dispatchEvent(cEvent)
}

