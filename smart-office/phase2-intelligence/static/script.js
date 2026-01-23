
function toggleDevice(device) {
    fetch(`/toggle/${device}`)
        .then(res => res.json())
        .then(updateUI);
}

function updateUI(states) {

    document.getElementById("light-status").innerText = states.light ? "ON" : "OFF";
    document.getElementById("fan-status").innerText = states.fan ? "ON" : "OFF";
    document.getElementById("door-status").innerText = states.door ? "OPEN" : "CLOSED";

    // Checked checkbox represents ON state for devices
    document.getElementById("light-switch").checked = states.light;
    document.getElementById("fan-switch").checked = states.fan;
    document.getElementById("door-switch").checked = states.door;
}

// Auto refresh
setInterval(() =>{
    fetch("/status")
        .then(res => res.json())
        .then(updateUI);
}, 1000);