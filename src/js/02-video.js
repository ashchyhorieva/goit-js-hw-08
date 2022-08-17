import Player from '@vimeo/player';
import * as throttle from 'lodash.throttle';

console.log(throttle);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//player.on('play', function() {
//    console.log('played the video!');
//});

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
console.log(LOCALSTORAGE_KEY);

const onPlay = throttle(data => {
    localStorage.setItem(LOCALSTORAGE_KEY, `${data.seconds}`);
}, 1000);

player.on('timeupdate', onPlay);
console.log(player.on);

const currentTime = +localStorage.getItem(LOCALSTORAGE_KEY);

console.log('currentTime', currentTime);

if (currentTime) {
    player.setCurrentTime(currentTime);
}
