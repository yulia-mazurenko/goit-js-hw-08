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
    const savingTime = localStorage.getItem(CURRENT_TIME); 
    
    if (!savingTime) {
        return;
    }

    const savingTimeInSeconds = JSON.parse(localStorage.getItem(CURRENT_TIME)).seconds; 

player.setCurrentTime(savingTimeInSeconds).then(function() {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
    }





  