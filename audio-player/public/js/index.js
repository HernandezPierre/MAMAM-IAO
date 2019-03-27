var wavesurfer;
var playerContainer = '#body-song__player';

window.onload = function(){

    /**** CLICK LISTENERS ****/
    var songs = document.querySelectorAll('.sidebar .song');
    for(let indexSongs = 0; indexSongs < songs.length; indexSongs++)
    {
        songs[indexSongs].addEventListener('click', function(){
            launchPlayer(this.dataset.song);
            refreshPartition(this.dataset.img);
        });
    }

    var playerButtons = document.querySelectorAll('#body-song__player-buttons button');
    for(let buttonIndex = 0; buttonIndex < playerButtons.length; buttonIndex++)
    {
        if( playerButtons.hasOwnProperty(buttonIndex) )
            playerButtons[buttonIndex].addEventListener('click', playerAction);
    }
};


function playerAction()
{
    switch (this.dataset.action) {
        case 'play':
            wavesurfer.play();
            break;
        case 'pause':
            wavesurfer.pause();
            break;
        case 'stop':
            wavesurfer.stop();
    }
}



function launchPlayer(path)
{
    var playerDomContainer = document.querySelector(playerContainer);
    if( playerDomContainer !== undefined )
        playerDomContainer.innerHTML = '';

    wavesurfer = WaveSurfer.create({
        container: playerContainer,
        waveColor: 'grey',
        progressColor: 'hsla(200, 100%, 30%, 0.5)',
        cursorColor: '#fff',
        barWidth: 3
    });
    wavesurfer.load(path);
    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });
}

function refreshPartition(path)
{
    var partitionContainer = document.querySelector('#body-song__partition img');
    if( partitionContainer !== null )
    {
        partitionContainer.src = path;
    }
}
