const container = document.querySelector('.container')
const mainVideo = container.querySelector('video')
const progressBar = container.querySelector('.progress-bar')
const volumeBtn = container.querySelector('.volume i')
const volumeSlider = container.querySelector('.left input')
const skipBackward = document.querySelector('.skip-backward i')
const skipForward = document.querySelector('.skip-forward i')
const playPauseBtn = document.querySelector('.play-pause i')

mainVideo.addEventListener('timeupdate', e => {
    let {currentTime, duration} = e.target
    let percent = (currentTime / duration) * 100
    progressBar.style.width = `${percent}%`
})

volumeBtn.addEventListener('click', () => {
    if (!volumeBtn.classList.contains('fa-volume-high')) {
        mainVideo.volume = 0.5
        volumeBtn.classList.replace('fa-volume-xmark', 'fa-volume-high')
    } else {
        mainVideo.volume = 0.0
        volumeBtn.classList.replace('fa-volume-high', 'fa-volume-xmark')
    }
    volumeSlider.value = mainVideo.volume
})

volumeSlider.addEventListener('input', e => {
    mainVideo.volume = e.target.value
    if (e.target.value == 0) {
        volumeBtn.classList.replace('fa-volume-high', 'fa-volume-xmark')
    } else {
        volumeBtn.classList.replace('fa-volume-xmark', 'fa-volume-high')
    }
})

skipBackward.addEventListener('click', () => {
    mainVideo.currentTime -= 5
})

skipForward.addEventListener('click', () => {
    mainVideo.currentTime += 5
})

playPauseBtn.addEventListener('click', () => {
    mainVideo.paused ? mainVideo.play() : mainVideo.pause()
})

mainVideo.addEventListener('play', () => {
    playPauseBtn.classList.replace('fa-play', 'fa-pause')
})

mainVideo.addEventListener('pause', () => {
    playPauseBtn.classList.replace('fa-pause', 'fa-play')
})
