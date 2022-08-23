
const playersPicked = [];

function pickedPlayer(playerId) {

    if (playersPicked.length == 5) {
        alert('You are already picked 5 player...!!')
    }
    else {
        playersPicked.push(1)

        const selectList = document.getElementById(playerId);
        const selectedPlayer = selectList.innerText;

        const pickPlayers = document.getElementById('pick-players');
        const li = document.createElement('li');
        li.innerText = selectedPlayer;
        pickPlayers.appendChild(li);
    }


}

document.getElementById('select-alison').addEventListener('click', function () {
    pickedPlayer('player-1');
    document.getElementById('select-alison').disabled = true;
})

document.getElementById('select-arold').addEventListener('click', function () {
    pickedPlayer('player-2');
    document.getElementById('select-arold').disabled = true;
})

document.getElementById('select-bowen').addEventListener('click', function () {
    pickedPlayer('player-3');
    document.getElementById('select-bowen').disabled = true;
})

document.getElementById('select-bruno').addEventListener('click', function () {
    pickedPlayer('player-4');
    document.getElementById('select-bruno').disabled = true;
})

document.getElementById('select-kavin').addEventListener('click', function () {
    pickedPlayer('player-5');
    document.getElementById('select-kavin').disabled = true;
})

document.getElementById('select-jack').addEventListener('click', function () {
    pickedPlayer('player-6');
    document.getElementById('select-jack').disabled = true;
})

document.getElementById('select-kane').addEventListener('click', function () {
    pickedPlayer('player-7');
    document.getElementById('select-kane').disabled = true;
})

document.getElementById('select-haland').addEventListener('click', function () {
    pickedPlayer('player-8');
    document.getElementById('select-haland').disabled = true;
})

document.getElementById('select-madi').addEventListener('click', function () {
    pickedPlayer('player-9');
    document.getElementById('select-madi').disabled = true;
})

document.getElementById('select-ronaldo').addEventListener('click', function () {
    pickedPlayer('player-10');
    document.getElementById('select-ronaldo').disabled = true;
})

document.getElementById('select-vabdik').addEventListener('click', function () {
    pickedPlayer('player-11');
    document.getElementById('select-vabdik').disabled = true;
})

document.getElementById('select-rahim').addEventListener('click', function () {
    pickedPlayer('player-12');
    document.getElementById('select-rahim').disabled = true;
})



