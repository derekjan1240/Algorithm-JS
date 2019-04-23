function levenshteinDistance(a, b){ 
    if(a.length==0){
        return b.length;
    }

    if(b.length == 0){
        return a.length;
    }

    // Init matrix
    let matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

    for(let j=0; j<=a.length; j++){
        matrix[0][j]=j;
    }

    for(let k=0;k<=b.length;k++){
        matrix[k][0]=k;
    }

    // Start calculate matrix
    for(let j=0; j<b.length; j++){
        for(let k=0; k<a.length; k++){
            if(b[j] == a[k]){
                matrix[j+1][k+1] = Math.min(matrix[j][k], matrix[j][k+1], matrix[j+1][k]);
            }else{
                matrix[j+1][k+1] = Math.min(matrix[j][k], matrix[j][k+1], matrix[j+1][k])+1;
            }
        }
    }
    console.log(matrix);

    const distance = matrix[a.length][b.length];
    return distance;
}

function clickToCalculateDistance(){
    const wordA = document.getElementById('wordA');
    const wordB = document.getElementById('wordB');
    const distanceShow = document.getElementById('distanceShow');

    distanceShow.innerHTML = `Distance: ${levenshteinDistance(wordA.value, wordB.value)}`;
}

