const playBtn = document.querySelector('.play-btn')
const playImg = document.querySelector('.play-img')
const speedBtn = document.querySelector('.speed-btn')
const speedImg = document.querySelector('.speed-img')
const audio = document.querySelector('.audio')

const playSrc = {
    "play": '../img/play-100.svg',
    "pause": '../img/pause-100.svg'
}

const speedSrc = [
    '../img/speed-1.svg',
    '../img/speed-1.25.svg',
    '../img/speed-1.5.svg',
    '../img/speed-1.75.svg',
]

function playPsalm() {
    playImg.setAttribute('src', playSrc.pause)
    audio.play()
}

function pausePsalm() {
    playImg.setAttribute('src', playSrc.play)
    audio.pause()
}

playBtn.addEventListener('click', () => {
    (audio.paused) ? playPsalm() : pausePsalm()
})