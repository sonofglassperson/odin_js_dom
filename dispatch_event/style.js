window.addEventListener('load', (event) => {

    const btn = document.querySelector('#userClick')
    //btn.onclick = () => alert('hello')
    btn.addEventListener('click', () => {
        alert('button clicked!!!')
    })

    let clickDispatchEvent = new Event('click');
    btn.dispatchEvent(clickDispatchEvent)

    alert(clickDispatchEvent.isTrusted) // is trusted is false because the event wasn't from a user action.
});