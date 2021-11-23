const video = document.getElementById("vimeo-player");

const player = new Vimeo.Player(video);

if(localStorage.getItem("videoplayer-current-time") !== null) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}

const throttle = require('lodash.throttle');

function saveCurrentTime(data) {
    //do stuff
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(localStorage.getItem("videoplayer-current-time"));
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));