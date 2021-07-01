const nav = document.querySelector('nav')
const toggle = document.querySelector('.toggle')
const overlay = document.querySelector('#overlay')

toggle.addEventListener('click', () => {
    nav.classList.toggle('is-open')
    overlay.classList.toggle('fixed')
    const arr = toggle.children[0].src.split('-')
    if (arr[arr.length - 1] === "hamburger.svg") {
        document.querySelector('body').style.overflowY = "hidden"
        toggle.children[0].src = "./images/icon-close.svg"
        return;    
    }
    toggle.children[0].src = "./images/icon-hamburger.svg"
    document.querySelector('body').style.overflowY = "auto"
})