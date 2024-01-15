const playBtn = document.querySelector('.play-btn')
const playImg = document.querySelector('.play-img')
const speedBtn = document.querySelector('.speed-btn')
const speedImg = document.querySelector('.speed-img')
const audio = document.querySelector('.audio')
const progress = document.querySelector('.progress')
const timeLine = document.querySelector('.time-line')

const playSrc = {
    "play": '../../img/play-100.svg',
    "pause": '../../img/pause-100.svg'
}

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


/* -------------PROGRESS------------- */
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100 || 0
    timeLine.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = clickX / width * duration 
}
/* progress.addEventListener('click', setProgress) */
progress.addEventListener('mouseup', setProgress)
progress.addEventListener('touchend', setProgress)


/* -------------END-PSALM------------ */
function endPsalm() {
    playImg.setAttribute('src', playSrc.play)
}
audio.addEventListener('ended', endPsalm)

/* ------------SPEED------------------- */
function setSpeed() {
    const speedSrc = [
        '../../img/speed-1.svg',
        '../../img/speed-1.2.svg',
        '../../img/speed-1.5.svg',
        '../../img/speed-1.7.svg',
    ]    
    const speedRate = [ 1, 1.2, 1.5, 1.7 ]
    const currentSpeed = speedImg.getAttribute("src")    
    let i = speedSrc.indexOf(currentSpeed)

    if (i < speedSrc.length - 1) {
        i = i + 1
    } else {
        i = 0
    }

    speedImg.setAttribute('src', speedSrc[i])
    audio.playbackRate = speedRate[i]
}
speedBtn.addEventListener('click', setSpeed)