//input example {3,0,6,0,4,0,2} => output 3+4+2=9
/*
       o
       o
       o * o
   o * o * o
   o * o * o * o
   o * o * o * o 
*/
// 2,6,5,8,4,2,3,0,9
let testInput = [3,0,6,0,4,0,2];
let lrArr=[], rlArr=[];   

window.onload = function(){
    // example data test
    rainTerraces(testInput)
    grapg(testInput);
    lrArr=[], rlArr=[];
}

function rainTerraces(arr){
    let arrsum =0,
        maxElement =arr[0];

    arr.forEach(e => {
        if(e%1!=0){
            return 'Not Integers array!'
        }else if(e>maxElement){
            maxElement = e;
        }
        arrsum += e;
    });

    let max,
        lrsum =0,
        rlsum =0;
    // L -> R
    max =arr[0];
    for(let j=0; j<arr.length; j++){
        if(arr[j]>max){
            max = arr[j];
            lrArr.push(0);
        }else{
            lrsum += max-arr[j];
            lrArr.push(max-arr[j]);
        }
    }
    // R -> L
    max =arr[arr.length-1]
    for(let j=arr.length-1; j>=0; j--){
        if(arr[j]>max){
            max = arr[j];
            rlArr.unshift(0);
        }else{
            rlsum += max-arr[j];
            rlArr.unshift(max-arr[j]);
        }
    }

    output = lrsum + rlsum + arrsum - maxElement*arr.length;
    console.log('output:', output);
    return output;
}

function clickToCalOutput(){
    let arrNum =[],
        output =null,
        showOutput = document.getElementById('outputShow'),
        showInput = document.getElementById('inputShow'),
        arrText = document.getElementById('input').value;

    arrText = arrText.split(','),
    console.log(arrText);

    arrText.forEach((e)=>{
        if(Number(e)){
            arrNum.push(Number(e));
        }else{
            output = "Not Integers Input! (e.g 3, 0, 6, 0, 4, 0, 2)";
        }
    });

    if(!output){
        console.log('Input:', arrNum);
        output = rainTerraces(arrNum);
        grapg(arrNum);
        // Reset lr & rl array
        lrArr=[], rlArr=[];
    }else{
        console.log('Input:', arrText, '\nOutput:', output);
    }
    showOutput.innerHTML = `Output: ${output}`;
    showInput.innerHTML = `Input: ${arrText}`;
}

function grapg(arr){
    // Reset canvas
    document.getElementById('graph').innerHTML = '<canvas id="myChart"></canvas>'

    let waterArr = [];
    for(let j=0; j<arr.length; j++){
        waterArr.push(Math.min(lrArr[j], rlArr[j])+arr[j]);
    }

    // Set chart label
    let labelArr = [];
    for(let j=1; j<=arr.length; j++){
        labelArr.push(j)
    }

    // Create Chart
    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'bar',
        // The data for our dataset
        data: {
            labels: labelArr,
            datasets: [{
                label: 'Wall',
                backgroundColor: '#e17055',
                borderColor: '#e17055',
                data: arr
            },
            {
                label: 'Water',
                backgroundColor: '#74b9ff',
                borderColor: '#74b9ff',
                data: waterArr
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true 
                }]
            }
        }
    });
}