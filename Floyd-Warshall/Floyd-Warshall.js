/** Floyd-Warshall
 * > input
 *     A B C D
 *    ---------
 * A | 0 2 6 4 |
 * B | * 0 3 * |
 * C | 7 * 0 1 |
 * D | 5 * 9 0 |
 *    ---------- 
 * 
 * > output
 *     A B C D
 *    ----------
 * A | 0 2 5 4 |
 * B | 9 0 3 4 |
 * C | 6 8 0 1 |
 * D | 5 7 9 0 |
 *    ---------
*/

//Init arr
let arr = [
    [0, 2, 6, 4],
    [Infinity, 0, 3, Infinity],
    [7, Infinity, 0, 1],
    [5, Infinity, 9, 0]
];
console.log('Input_arr(null -> Infinity):\n', JSON.stringify(arr)); 

function FloydWarshall(arr){
    for(i=0; i<arr.length; i++){
        for (let j = 0; j<arr.length; j++) {
            for (let k = 0; k<arr.length; k++) {
                if(arr[j][k] > arr[j][i]+arr[i][k]){
                    arr[j][k] = arr[j][i]+arr[i][k];
                }
            }
        }
    }
}

/* vis.js draw*/ 
// create nodes
const nodes = new vis.DataSet([
    {id: 0, label: 'A'},
    {id: 1, label: 'B'},
    {id: 2, label: 'C'},
    {id: 3, label: 'D'}
]);

function SetEdageData(){
    let dataArr=[];
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr[j].length; k++) {
            if(arr[j][k]!=Infinity && arr[j][k]){
                dataArr.push({from: j, to: k ,label: arr[j][k].toString(), arrows:'to', font: {align: 'top'}, color:{color:'black'}})
            }
        }
    }
    return dataArr; 
}

window.onload = function () {

    // create a network
    const Before = document.getElementById('Before');
    const After = document.getElementById('After');

    // draw input graph
    let edges = new vis.DataSet(SetEdageData());
    const networkA = new vis.Network(Before, {
        nodes: nodes,
        edges: edges
    },{});

    FloydWarshall(arr);
    console.log('Floyd-Warshall: ', arr);

    // draw output graph
    edges = new vis.DataSet(SetEdageData());
    const networkB = new vis.Network(After, {
        nodes: nodes,
        edges: edges
    },{});
}