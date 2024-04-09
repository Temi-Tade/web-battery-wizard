async function GET_BATTERY_STATUS(){
    await navigator.getBattery().then(res => {
        document.querySelector("#level").style.height = `${res.level*100}%`
        document.querySelector("#info table").innerHTML = `
        <tr>
            <th>Level (%)</th>
            <td>${res.level*100}</td>
        </tr>
        <tr>
            <th>Status</th>
            <td id="status">${res.charging}</td>
        </tr>
        <tr>
            <th>Charging Time</th>
            <td>${res.chargingTime}</td>
        </tr>
        <tr>
            <th>Discharging Time</th>
            <td>${res.dischargingTime}</td>
        </tr>
    `
    if (res.charging && res.level*100 === 100) {
        document.querySelector("#status").innerHTML = "Plugged In. Battery Full."
    }else if(!res.charging && res.level*100 === 100){
        document.querySelector("#status").innerHTML = "Unplugged. Battery Full."
    }else if(!res.charging && res.level*100 <= 30){
        document.querySelector("#status").innerHTML = "Unplugged. Battery Low."
    }else if(res.charging && res.level*100 !== 100){
        document.querySelector("#status").innerHTML = "Plugged In. Charging."
    }else{
        document.querySelector("#status").innerHTML = "Unplugged."
    }
    });
}

const LAUNCH_SYNC_MODE = (isChecked) => {
    if (isChecked) {
        setInterval(GET_BATTERY_STATUS, 1000)
        document.querySelector("#check-btn-wrap button").style.display = "none"
    } else {
        clearInterval()
        document.querySelector("#check-btn-wrap button").style.display = "block"
    }
}

// GET_BATTERY_STATUS()

//mobil, toggle views
//svg or chaging icon
//font-tech or hacker