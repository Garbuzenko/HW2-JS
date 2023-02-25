function simple(a){
    for (i = 2;i<a;i++){
        if (a % i === 0) { 
            return false;
            exit;
        };
    }
    return true;
}

while (true){

    const numberFromUser = prompt("Введите число");
    console.time()
    let answer = simple(+numberFromUser)
    console.timeEnd()
    alert(answer);
}