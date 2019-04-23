/**
 *  N is composite
 *  N =a*b
 *  If a<b => a^2<=a*b => a^2<=N => a<=N^(1/2)
 * 
*/

function updateTextInput(){
    let numInput = document.getElementById('numInput');
    valueShow.innerHTML = PrimalityTest(numInput.value);
}

const PrimalityTest = function(number){

    if (number % 1 !== 0) {
        return `"${number}" is not an Integer`;
    }

    if(number <=1){
        return `"${number}" is not Primality`;
    }

    if(number<=3){
        return `"${number}" is Primality`;
    }

    const dividerLimit = Math.sqrt(number);
    for (let divider = 2; divider <= dividerLimit; divider++) {
        if (number % divider === 0) {
            return `"${number}" is not Primality`;
        }
    }

    return `"${number}" is Primality`;
}
