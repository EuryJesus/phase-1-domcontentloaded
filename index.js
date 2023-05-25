document.addEventListener('DOMContentLoaded',() => {
    console.log('The DOM has Loaded')
    let HZ = document.querySelector('p')
    HZ.textContent = 'This is really cool!'
})
    console.log('Before DOM Loads')
    console.log(document.querySelector('p'))