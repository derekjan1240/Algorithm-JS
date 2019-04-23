function updateTextInput(){
    let range = document.getElementById('formControlRange')
    valueShow.innerHTML = `Fibonacci(${Number(range.value)+1}) = ${fibonacci(range.value)}`; 
}

function fibonacci(n){
    if(n<0){
        return 'N can,t be negative!'
    }else if(n==0 || n==1){
        return n;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}