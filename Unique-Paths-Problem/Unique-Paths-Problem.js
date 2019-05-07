window.onload = function(){
    // example Cal $ Graph
    console.log(uniquePathsProblem(3, 2));
    graph(3, 2);
}
function uniquePathsProblem(m, n){
    // check input
    if(!m || !n){
        return 'Please input 2 positive integer!'
    }else if(m%1!=0 || n%1!=0){
        return 'Please input 2 positive integer!'
    }

    let max = Math.max(m-1, n-1),
        min = Math.min(m-1, n-1),
        a= 1,b= 1;

    for(let j=max+1; j<=(max+min); j++){
        a*=j;
    }
    for(let k=1; k<=min; k++){
        b*=k;
    }

    return a/b;
}
function clickToCalOutput(){
    let showOutput = document.getElementById('outputShow'),
        showInput = document.getElementById('inputShow'),
        m = document.getElementById('inputM').value;
        n = document.getElementById('inputN').value;

    graph(m, n);
    output = uniquePathsProblem(m, n);

    showInput.innerHTML = `Input: (${m}, ${n})`;
    showOutput.innerHTML = `Output: ${output}`;
}
function graph(m, n){
    let table = document.getElementById('graph');

    // reset table
    table.innerHTML='';

    for(let j=1; j<=m; j++){
        //create tr
        let nodeTr = document.createElement("tr");
        nodeTr.setAttribute("id", `m${j}`);
        table.appendChild(nodeTr);
        //create td
        for(let k=1; k<=n; k++){
            let nodeTd = document.createElement("td");
            nodeTd.setAttribute("id", `n${k}`);
            let Tr = document.getElementById(`m${j}`);
            if(j==1 && k==1){
                nodeTd.setAttribute("class", "head");
            }else if(j==m && k==n){
                nodeTd.setAttribute("class", "tail");
            }
            Tr.appendChild(nodeTd);
        }
    }
}