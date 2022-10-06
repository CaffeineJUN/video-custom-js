const container = document.querySelector('.container')
const mainVideo = container.querySelector('video')
const progressBar = container.querySelector('.progress-bar')
const skipBackward = document.querySelector('.skip-backward i')
const skipForward = document.querySelector('.skip-forward i')
const playPauseBtn = document.querySelector('.play-pause i')

mainVideo.addEventListener('timeupdate', e => {
    let {currentTime, duration} = e.target
    let percent = (currentTime / duration) * 100
    progressBar.style.width = `${percent}%`
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
