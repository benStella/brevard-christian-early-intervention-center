// document.body.addEventListener('change', function() {
//     if (window.innerWidth < 1440) {
//         console.log('less than 1440')
//     } else if (window.innerWidth > 1440) {
//         console.log('greater than 1440')
//     }

// })

let headerNav = document.querySelector('#header-nav')

headerNav.addEventListener('click', event => {
    let headerLi = document.querySelector('.header-li')
    event.preventDefault()
    let targetEl = event.target
    headerLi.setAttribute('style', 'text-decoration; none;')
    targetEl.setAttribute('style', 'text-decoration: underline;')

})