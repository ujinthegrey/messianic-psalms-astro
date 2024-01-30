const btns = document.querySelectorAll('.description-btn')
const descriptions = document.querySelectorAll('.description')
for (let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', () => {
        descriptions[i].classList.toggle('hidden-description')
        if (btns[i].innerHTML === 'Описание') {
            btns[i].innerHTML = 'Скрыть'
        } else {
            btns[i].innerHTML = 'Описание'
        }
    } )
}