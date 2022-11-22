function distanceFromHqInBlocks(pickUpBlock){
    if (pickUpBlock>=42){ 
    return pickUpBlock - 42}
    else if (pickUpBlock < 42){
        return 42 - pickUpBlock}
    }
     


function distanceFromHqInFeet(pickUpBlock){
    let finalDistanceFeet = distanceFromHqInBlocks(pickUpBlock)*264
    return finalDistanceFeet
}

function distanceTravelledInFeet(startBlock,endBlock){
    let totalDistanceFeet = (Math.abs(endBlock-startBlock))*264
    return totalDistanceFeet
}

function calculatesFarePrice(startBlock,endBlock){
    if (distanceTravelledInFeet(startBlock,endBlock)<=400){
        return 0
    }
    else if (distanceTravelledInFeet(startBlock,endBlock)<=2000){
        return (distanceTravelledInFeet(startBlock,endBlock)-400)*0.02
    }
    else if (distanceTravelledInFeet(startBlock,endBlock)<=2500){
        return 25
    }
    else if (distanceTravelledInFeet(startBlock,endBlock)>=2500){
        return  "cannot travel that far"
    }
     
}
