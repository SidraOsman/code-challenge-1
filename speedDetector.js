function speedDetector(speed){
    if (speed <= 70) {
        console.log("Okay")
    } else {
        let points = (speed - 70)/5 ;
        if (points > 12) {
            console.log("License Suspended");
        }else {
            console.log(points);}
        
    }
}

speedDetector(125);
