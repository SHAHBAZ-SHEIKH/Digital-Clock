
setInterval(() =>{
    var time = document.querySelector("#time")
    var date =new Date()
    var hour = date.getHours()
    var min =date.getMinutes()
    var sec = date.getSeconds()

    if(hour > 12){
        hour = hour -12
    }
    
    if(sec <10){
        sec = "0" + sec
    }

    if(min <10){
        min = "0" + min
    }

time.innerHTML= hour + ":" + min + ":"  +sec

})
