
function toggleDevice(device) {
    fetch(`/toggle/${device}`)
        .then(res => res.json())
        .then(updateUI);
}

function updateUI(states) {
    const light = document.getElementById("light");
    const fan = document.getElementById("fan");
    const door = document.getElementById("door");


    document.getElementById("light-status").innerText = states.light ? "ON" : "OFF";
    document.getElementById("fan-status").innerText = states.fan ? "ON" : "OFF";
    document.getElementById("door-status").innerText = states.door ? "OPEN" : "CLOSED";

    document.getElementById("light-switch").checked = states.light;
    document.getElementById("fan-switch").checked = states.fan;
    document.getElementById("door-switch").checked = states.door;

    light.className = `deviceAnim light ${states.light ? "ON" : "OFF" }`;
    fan.className = `deviceAnim fan ${states.fan ? "ON" : "OFF" }`;
    door.className = `deviceAnim door ${states.door ? "OPEN" : "CLOSED" }`;

}

// Auto refresh
setInterval(() =>{
    fetch("/status")
        .then(res => res.json())
        .then(updateUI);
}, 1000);