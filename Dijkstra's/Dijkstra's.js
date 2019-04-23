// prepere grapg
const graph = {
    start: {A: 3, B: 1},
    A: {C: 6, D: 1},
    B: {E: 7},
    C: {F: 1, G: 1},
    D: {E: 4, F: 4},
    E: {finish: 7},
    F: {finish: 7},
    finish: {}
};

const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
      console.log('lowest:', lowest, 'node:',node);
      if (lowest === null || costs[node] < costs[lowest]) {
        if (!processed.includes(node)) {
          lowest = node;
        }
      }
      return lowest;
    }, null);
  };

const dijkstra = (graph) => {
  const costs = Object.assign({finish: Infinity}, graph.start);
  const parents = {finish: null};
  for (let child in graph.start) {  // add children of start node
    parents[child] = 'start';
  }
  const processed = [];
  let node = lowestCostNode(costs, processed);
  while (node) {
    let cost = costs[node];
    let children = graph[node];
    for (let n in children) {
      let newCost = cost + children[n];
      console.log('n:',n)
      // 新增節點成本
      if (!costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
      // 更新節點成本
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    console.log('processed:', processed)
    console.log('costs:', costs)

    node = lowestCostNode(costs, processed);
  }

  //由 finish node 反推路徑
  let optimalPath = ['finish'];
  let parent = parents.finish;
  
  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }
  
  optimalPath.reverse();  // reverse array to get correct order
  const results = {
    distance: costs.finish,
    path: optimalPath
  };
  return results;
}; 


/* vis.js draw*/ 
// create an array with nodes
let nodes = new vis.DataSet([
  {id: 'A', label: 'A'},
  {id: 'B', label: 'B'},
  {id: 'C', label: 'C'},
  {id: 'D', label: 'D'},
  {id: 'E', label: 'E'},
  {id: 'F', label: 'F'},
  {id: 'G', label: 'G'},
  {id: 'start', label: 'start', color:'red'},
  {id: 'finish', label: 'finish', color:'red'}
]);

// create an array with edges
let edges = new vis.DataSet([
  {from: 'A', to: 'C' ,label: '6', font: {align: 'top'},color:{color:'black'}},
  {from: 'A', to: 'D' ,label: '1', font: {align: 'top'},color:{color:'black'}},
  {from: 'B', to: 'E' ,label: '7', font: {align: 'top'},color:{color:'black'}},
  {from: 'C', to: 'F' ,label: '1', font: {align: 'top'},color:{color:'black'}},
  {from: 'C', to: 'G' ,label: '1', font: {align: 'top'},color:{color:'black'}},
  {from: 'D', to: 'E' ,label: '4', font: {align: 'top'},color:{color:'black'}},
  {from: 'D', to: 'F' ,label: '4', font: {align: 'top'},color:{color:'black'}},
  {from: 'E', to: 'finish' ,label: '7', font: {align: 'top'},color:{color:'black'}},
  {from: 'F', to: 'finish' ,label: '7', font: {align: 'top'},color:{color:'black'}},
  {from: 'start', to: 'A' ,label: '3', font: {align: 'top'},color:{color:'black'}},
  {from: 'start', to: 'B' ,label: '1', font: {align: 'top'},color:{color:'black'}}
]);

window.onload = function () {
  // cal cheapest path
  let results = dijkstra(graph)
  console.log('dijkstra: ', results);

  // create a network
  const Before = document.getElementById('Before');
  const After = document.getElementById('After');
  let data = {
    nodes: nodes,
    edges: edges
  };
  let options = {};

  // draw the original graph
  const networkA = new vis.Network(Before, data, options);
  // set cheapest path
  results.path.map( node =>{
    nodes._data[node].color = 'red'
  });
  // draw the cheapest graph
  const networkB = new vis.Network(After, data, options);
}
  