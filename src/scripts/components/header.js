let bg = document.querySelector('.bg'),
    navMenu = document.querySelector('.header__nav-menu'),
    button = document.querySelector('.header__nav-button');
    
button.addEventListener('click', () => {
    navMenu.classList.add('active')
    bg.classList.add('active')
})
bg.addEventListener('click', () => {
    navMenu.classList.remove('active')
    bg.classList.remove('active') 
})
    