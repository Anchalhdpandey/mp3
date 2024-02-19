let progress = document.getElementById("progress");
let song = document.getElementById("song");
let cntrolIcon = document.getElementById("cntrolIcon");
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playPause() {
  if (cntrolIcon.classList.contains("fa-pause")) {
    song.pause();
    cntrolIcon.classList.remove("fa-pause");
    cntrolIcon.classList.add("fa-play");
  } else {
    song.play();
    cntrolIcon.classList.remove("fa-play");
    cntrolIcon.classList.add("fa-pause");
  }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },1000)
}
