let sec = document.querySelector(".sec")
let min = document.querySelector(".min")
let hour = document.querySelector(".hour")
let clock = document.querySelector(".clock")
let stopwatch = document.querySelector(".watch")
let clockBtn = document.querySelector(".clockSelect")
let stopwatchBtn = document.querySelector(".stopwatchsel")
let Btns = document.querySelector(".Btns")

// these func is use to switch between stopwatch and digital clock
clockBtn.addEventListener('click' , ()=>{
    stopwatch.classList = 'watch'
    clock.classList = 'clock'
    Btns.classList = 'Btns'
})
stopwatchBtn.addEventListener('click' , () =>{
    clock.classList = 'clockIvs'
    stopwatch.classList = 'stopwatchVs'
    Btns.classList = 'button'
})

//to get current hour
setInterval(timehandler , 1000)
function timehandler(){
    let date = new Date()
    sec.innerHTML = date.getSeconds()
    min.innerHTML = date.getMinutes()
    hour.innerHTML = date.getHours()

}