function speedDetector (speed){
    const speedLimit =70
    const demeritSpeed =5
    const demeritPoints= Math.floor((speed-speedLimit)/demeritSpeed)
    if (speed<=70){
        return 'OK'
    } else {
        if (demeritPoints>=12){
            return 'licence suspended'
        }
        return demeritPoints
    }
}    
console.log(speedDetector(100))