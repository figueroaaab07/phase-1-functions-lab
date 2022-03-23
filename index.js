// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(numberOfBlocks){
    return distanceFromHqInBlocks(numberOfBlocks) * 264;
}

function distanceBetweenBlocks(firstBlock, secondBlock) {
    return Math.abs(firstBlock - secondBlock);
}

function distanceTravelledInFeet(originBlock, destinationBlock) {
    return distanceBetweenBlocks(originBlock, destinationBlock) * 264;
}

function calculatesFarePrice(start, destination) {
    let fareResponse;
    const fareDistance = distanceTravelledInFeet(start, destination);
    if (fareDistance > 2500) {
        fareResponse = 'cannot travel that far'
    } else if (fareDistance > 2000) {
        fareResponse = 25;
    } else if (fareDistance > 400) {
        fareResponse = (fareDistance - 400) * 0.02;
    } else {
        fareResponse = 0;
    }
    return fareResponse;
}
