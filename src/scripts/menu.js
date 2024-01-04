document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('hidden-nav');
    document.querySelector('.burger').classList.toggle('close-burger');
});