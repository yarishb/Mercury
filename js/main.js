
let open = false
const $openButton = document.querySelector('#open')
const $navbarItems = document.querySelector('#items')
const $navbarBg = document.querySelector('#bg')
$openButton.addEventListener('click', () => {
    if (!open) {
        $navbarItems.style.marginRight = '-7rem'
        $navbarBg.style.backgroundColor = '#0e1a35'
        open = true
    } else {
        $navbarBg.style.backgroundColor = 'inherit'
        $navbarItems.style.marginRight = '-30rem'
        open = false
    }
})

const $navbar = document.querySelector('.navbar')
window.onscroll = () => {
    if (window.scrollY > 300 && window.innerWidth >= 1024) {
        $navbar.style.backgroundColor = '#0e1a35'
    } else {
        $navbar.style.backgroundColor = 'inherit'
    }
};