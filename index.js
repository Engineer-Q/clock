const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minutes")
const secondEl = document.querySelector(".seconds")

function updateTime() {
    const currentTime = new Date()

    console.log(currentTime)
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const hourDeg = (hours/12) * 360;
    const minutesDeg = (minutes / 60) *360;
    const secondsDeg = (seconds / 60) *360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`
    minuteEl.style.transform = `rotate(${minutesDeg}deg)`
    secondEl.style.transform = `rotate(${secondsDeg}deg)`

   
    setTimeout(updateTime,1000)
}
updateTime()