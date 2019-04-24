function euclidean(numA, numB){
    // check numA numB are integer
    numA = Math.abs(numA);
    numB = Math.abs(numB);
    if(!numA || !numB){
        return 'Please input the nonzero integers!';
    }
    return numA%numB==0? numB: euclidean(numB, numA%numB);
}

function clickToCalculateGCDnLCM(){
    const numA = document.getElementById('NumA');
    const numB = document.getElementById('NumB');
    const distanceShow = document.getElementById('distanceShow');

    let GCD = euclidean(numA.value, numB.value),
        LCM = Math.abs(numA.value*numB.value)/GCD;

    distanceShow.innerHTML = `GCD: ${GCD} <br> LCM: ${LCM}`;
}