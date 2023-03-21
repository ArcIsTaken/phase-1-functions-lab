// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
    return (distanceFromHqInBlocks(distance) * 264);
}

function distanceTravelledInFeet(start, destination) {
    let blocks = Math.abs(start - destination);
    return (blocks * 264);
}


function calculatesFarePrice(start, destination) {
    let blocks = Math.abs(start - destination);
    let feet = blocks * 264;
    let fare = ((feet - 400) * 0.02);
    if( feet <= 400){
        return 0
    } else if(feet > 400 && feet <=2000){
        return fare;
    } else if ( feet > 2000 && feet <=2500){
        return 25;
    } else if ( feet > 2500){
        return ("cannot travel that far");
    }
}

console.log(calculatesFarePrice(48,49));