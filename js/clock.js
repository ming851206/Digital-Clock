export function displayTime(){
    let clock = document.getElementById("clock");
    let now = new Date();
    let option = {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }

    let time = new Intl.DateTimeFormat("zh-TW", option).format(now);
    clock.textContent = time;
}

