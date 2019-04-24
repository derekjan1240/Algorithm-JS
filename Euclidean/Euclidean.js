function euclidean(numA, numB){
    // check numA numB are integer
    numA = Math.abs(numA);
    numB = Math.abs(numB);
    if(!numA || !numB){
        return 'Please input the nonzero integers!';
    }
    return numA%numB==0? numB: euclidean(numB, numA%numB);
}

function clickToCalculateGCD(){
    
    const numA = document.getElementById('NumA');
    const numB = document.getElementById('NumB');
    const distanceShow = document.getElementById('distanceShow');

    distanceShow.innerHTML = `GCD: ${euclidean(numA.value, numB.value)}`;
}

console.log(euclidean(0,143));