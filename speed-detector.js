// Function to detect speed violations and calculate demerit points
function speedDetector (speed){
    //Speed limit and parameters for demerit points
    const speedLimit =70
    const demeritSpeed =5
    // Calculate demerit points based on the speed and speed limit
    const demeritPoints= Math.floor((speed-speedLimit)/demeritSpeed)

    //Check if the speed is within the limit
    if (speed<=70){
        // If speed is within limit, return 'OK'
        return 'OK'
    } else {
        //If speed exceeds the limit, check demerit points
        if (demeritPoints>=12){
            // If demerit points are 12 or more, return 'licence suspended'
            return 'licence suspended'
        }
        //If demerit points are less than 12, return the calculated demerit points
        return demeritPoints
    }
}    
//Example usage of the function and logging the result
console.log(speedDetector(100))