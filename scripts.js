let buttonClimbTeleop;
let buttonClimbAuto;


function updateScore(id, delta) {
    const input = document.getElementById(id);
    let currentValue = parseInt(input.value);
    currentValue = Math.max(0, currentValue + delta);
    input.value = currentValue;
}


function setClimbAuto(number){
    clearClimbAutoButtons()
    buttonClimbAuto = number;
    document.getElementById(buttonClimbAuto).classList.toggle("btn-primary");
    document.getElementById("AutoClimb").value = number;
    console.log(document.getElementById("AutoClimb").value)
}

function setClimbTeleop(number){
    clearClimbTeleopButtons()
    buttonClimbTeleop = number;
    document.getElementById(buttonClimbTeleop).classList.toggle("btn-primary");
    document.getElementById("TeleopClimb").value = number;
    console.log(document.getElementById("TeleopClimb").value)
}
    
function getAllValues(){
    const teamNumber = parseInt(document.getElementById('teamNumber').value);
    const roundNumber = parseInt(document.getElementById('roundNumber').value);
    const netAutoSample = parseInt(document.getElementById('netAutoSample').value);
    const lowAutoSample = parseInt(document.getElementById('lowAutoSample').value);
    const highAutoSample = parseInt(document.getElementById('highAutoSample').value);
    const lowAutoSpecimen = parseInt(document.getElementById('highAutoSample').value);
    const netTeleopSample = parseInt(document.getElementById('highAutoSample').value);
    const lowTeleopSample = parseInt(document.getElementById('highAutoSample').value);
    const highTeleopSample = parseInt(document.getElementById('highTeleopSample').value);
    const lowTeleopSpecimen = parseInt(document.getElementById('lowTeleopSpecimen').value);
    const highTeleopSpecimen = parseInt(document.getElementById('highTeleopSpecimen').value);
}

function clearClimbAutoButtons(){
    document.getElementById("buttonClimbAuto0").classList.remove("btn-primary");
    document.getElementById("buttonClimbAutoObs").classList.remove("btn-primary");
    document.getElementById("buttonClimbAutoAsc").classList.remove("btn-primary");
    document.getElementById("buttonClimbAuto0").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbAutoObs").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbAutoAsc").classList.add("btn-outline-primary");
}

function clearClimbTeleopButtons(){
    document.getElementById("buttonClimbTeleop0").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleopObs").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleop1").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleop2").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleop3").classList.remove("btn-primary");
    document.getElementById("buttonClimbTeleop0").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbTeleopObs").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbTeleop1").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbTeleop2").classList.add("btn-outline-primary");
    document.getElementById("buttonClimbTeleop3").classList.add("btn-outline-primary");
}

function sendToForms() {
    let data = {
        teamName: document.getElementById("teamName").value,
        teamNumber: parseInt(document.getElementById('teamNumber').value),
        roundNumber: parseInt(document.getElementById('roundNumber').value),
        netAutoSample: parseInt(document.getElementById('netAutoSample').value),
        lowAutoSample: parseInt(document.getElementById('lowAutoSample').value),
        highAutoSample: parseInt(document.getElementById('highAutoSample').value),
        lowAutoSpecimen: parseInt(document.getElementById('lowAutoSpecimen').value),
        netTeleopSample: parseInt(document.getElementById('netTeleopSample').value),
        lowTeleopSample: parseInt(document.getElementById('lowTeleopSample').value),
        highTeleopSample: parseInt(document.getElementById('highTeleopSample').value),
        lowTeleopSpecimen: parseInt(document.getElementById('lowTeleopSpecimen').value),
        highTeleopSpecimen: parseInt(document.getElementById('highTeleopSpecimen').value),
        buttonClimbAuto: document.getElementById("AutoClimb").value,
        buttonClimbTeleop: document.getElementById("TeleopClimb").value
    };

    fetch("https://script.google.com/macros/s/AKfycbx-mNG6Lvw03MC_Cbv8yb4CyqZzlbW0GyuJjpt5qkKmXpN39Ln28OTNjQWWy3lmTtw2AA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => {
        alert("Dados enviados com sucesso!");
    }).catch(err => {
        console.error("Erro ao enviar:", err);
    });
}
