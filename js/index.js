const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $playAgain = document.querySelector('#play-again');

$play.addEventListener("click", () => {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
})

$pause.addEventListener("click", () => {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
})

$backward.addEventListener("click", () => {
  $video.currentTime  -=  10;  
})

$forward.addEventListener("click", () => {
  $video.currentTime +=  10;  
})

const $progress = document.querySelector("#progress")

$video.addEventListener("loadedmetadata", () => {
  $progress.max = $video.duration;
})

$video.addEventListener("timeupdate", () => {
  $progress.value = $video.currentTime;
})

$progress.addEventListener("input", () => {
  $video.currentTime = $progress.value;
})

$video.addEventListener("ended", () => {
  $play.hidden = false;
  $backward.hidden = false;
  $forward.hidden = false;
  $pause.hidden = true;
  $video.pause();
  $video.currentTime = 0;
  $progress.value = 0;
})