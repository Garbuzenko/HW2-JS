function simple(a){
    for (i = 2;i<a;i++){
        if (a % i === 0) { 
            return false;
            exit;
        };
    }
    return true;
}

function simpleArray(n){
    let a = 2
    let count = 0
    let array =  [];
    while (count < n){
        a++
        if ( simple(a) == true ){
            array[count]=a
            count++
        }
    }
    return array;
}


console.log(simpleArray(process.argv[2]))
