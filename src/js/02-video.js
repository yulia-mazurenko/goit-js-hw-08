import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(savedTimeToUpdate, 1000));

updatedTiming();

function savedTimeToUpdate (data) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(data))   
}

function updatedTiming() {
    const savingTimeInSeconds = JSON.parse(localStorage.getItem(CURRENT_TIME)).seconds; 

    if (!savingTimeInSeconds) {
        return;
}

player.setCurrentTime(savingTimeInSeconds).then(function() {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
    }





  