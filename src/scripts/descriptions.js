const btns = document.querySelectorAll('.desctiption-btn')
const descriptions = document.querySelectorAll('.description')
for (let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', () => {
        descriptions[i].classList.toggle('hidden-description')
    } )
}