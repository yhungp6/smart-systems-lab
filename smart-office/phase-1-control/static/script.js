
function toggleDevice(device) {
    fetch(`/toggle/${device}`)
        .then(res => res.json())
        .then(updateUI);
}

function updateUI(states) {
    document.getElementById("light-status").innerText = states.light ? "ON" : "OFF";
    document.getElementById("fan-status").innerText = states.fan ? "ON" : "OFF";
    document.getElementById("door-status").innerText = states.door ? "OPEN" : "CLOSED";

    document.getElementById("light-switch").checked = light.states;
}