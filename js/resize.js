export function centerOfWindow(){ 
    let clockArea = document.getElementById("clockArea")
    let clockWidth = clockArea.offsetWidth;
    let clockHeight = clockArea.offsetHeight;

    let windowWidth = window.innerWidth;  
    let windowHeight = window.innerHeight;

    clockArea.style.left = `${(windowWidth - clockWidth) / 2}px`;
    clockArea.style.top = `${(windowHeight - clockHeight) / 2}px`;
}