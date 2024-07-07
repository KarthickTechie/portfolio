const menuBtn = document.querySelector('.menu-btn')

const hamMenuBtn = document.querySelector('.menu-btn__burger')

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item')

isMenuShowing = false

menuBtn.addEventListener('click',toggleMenu)

function toggleMenu(){
    if(!isMenuShowing)
    {
        hamMenuBtn.classList.add('open')
        nav.classList.add('open')
        menuNav.classList.add('open')
        navItems.forEach(item=>item.classList.add('open'))
        isMenuShowing = true
    }else{
        hamMenuBtn.classList.remove('open')
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        navItems.forEach(item=>item.classList.remove('open'))

        isMenuShowing = false

    }
}