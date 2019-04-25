function hammingDistance(a, b){
    if(a%1 || b%1){
        return 'Not Integers'
    }
    // XOR
    let c = (a ^ b);
    let distance =0;

    while(c != 0) {
        // clear the rightest '1' e.g '101' & 100 = '100' >  '100' & 011 = '000'
        // console.log('c:', c.toString(2));
        c &= c - 1;
        distance++;
    }

    return distance;
}

function clickToCalculateDistance(){
    const numA = document.getElementById('numA');
    const numB = document.getElementById('numB');
    const distanceShow = document.getElementById('distanceShow');

    distanceShow.innerHTML = `Distance: ${hammingDistance(numA.value, numB.value)}`;
}