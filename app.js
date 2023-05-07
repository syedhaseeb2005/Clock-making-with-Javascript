const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
// console.log(hour)
// console.log(minute)
// console.log(second)
function updateclock(){
    const currentdate = new Date()
    // console.log(currentdate)
    const hr = currentdate.getHours()
    const min = currentdate.getMinutes()
    const sec = currentdate.getSeconds()
    // console.log(hr,min,sec)
    const hourdeg = (hr / 12) *360
    hour.style.transform = `rotate(${hourdeg}deg)`
    const mindeg = (min / 60) *360;
    minute.style.transform = `rotate(${mindeg}deg)`
    const secdeg = (sec / 60) *360;
    second.style.transform = `rotate(${secdeg}deg)`
}
// updateclock()
setInterval(updateclock)