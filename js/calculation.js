
document.getElementById('btm-calculate').addEventListener('click', function(){
    const perPlayerFeild = document.getElementById('per-player-feild');
    const playerCostString = perPlayerFeild.value;
    const playerCost = parseFloat(playerCostString);

    const span = document.getElementById('player-cost');
    span.innerText = playerCost*playersPicked.length;
    perPlayerFeild.value = '';
})

document.getElementById('btn-total-calculate').addEventListener('click', function(){
    const managerFeild = document.getElementById('manager-feild');
    const managerCostString = managerFeild.value;
    const managerCost = parseFloat(managerCostString);

    const coachFeild = document.getElementById('coach-feild');
    const coachCostString = coachFeild.value;
    const coachCost = parseFloat(coachCostString);

    const totalPlayerCost = document.getElementById('player-cost');
    const totalPlayerCostString = totalPlayerCost.innerText;

    const totalCost = managerCost + coachCost + parseFloat(totalPlayerCostString);

    const span = document.getElementById('total-cost');
    span.innerText = totalCost;
    managerFeild.value = '';
    coachFeild.value = '';
})