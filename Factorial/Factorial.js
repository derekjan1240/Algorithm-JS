function updateTextInput(){
    let range = document.getElementById('formControlRange')
    valueShow.innerHTML = `${range.value}! = ${factorial(range.value)}`; 
}

function factorial(n){
    if(n<0){
        return 'N can,t be negative!'
    }else if(n==0 || n==1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

