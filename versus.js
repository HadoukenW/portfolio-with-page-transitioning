function burgerMenu(){
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () =>{
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        }
        else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })

    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 767) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })

}
burgerMenu()

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут мы указываем в пикселях сколько нужно проскролить, чтобы наше меню стало фиксированным
    const breakpoint = 1
    if(window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    }
    else {
        nav.classList.remove('fixed__nav')
    }
}

//getting uncommented if we need to execute this function
// window.addEventListener('scroll', fixedNav)
