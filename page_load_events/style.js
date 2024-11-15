

document.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded!');
})

document.addEventListener('load', (event) => {
    console.log('The page is fully loaded.');
});

document.addEventListener('beforeUnload', () => {
    console.log('beforeUnload page event!');
})

document.addEventListener('unload', () => {
    console.log('dom content unloaded!');
})