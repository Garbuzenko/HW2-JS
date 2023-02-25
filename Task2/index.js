const goods = [
    {
            id: 1,
            name:         "Мяч баскетбольный",
            description:   "Баскетбольный Wilson",
            sizes:         [16, 17, 19],
            price:         3000,
            available:     true,
    },
    {
            id: 2,
            name:         "Мяч футбольный",
            description:   "Футбольный Addidas",
            sizes:         [16, 17],
            price:         2700,
            available:     true,
    },
    {
            id: 3,
            name:         "Мяч воллейбольный",
            description:   "Воллейбольный  Wilson",
            sizes:         [16, 17],
            price:         1500,
            available:     true,
    },
    {
            id: 4,
            name:         "Мяч теннисный",
            description:   "Теннисный",
            sizes:         [3],
            price:         399,
            available:     false,
    },
    {
            id: 5,
            name:         "Мяч детский",
            description:   "Смешарики",
            sizes:         [10],
            price:         199,
            available:     true,
    },
]


let basket = [
    {
        id: 1,
        amount: 2,
    },
    {
        id: 2,
        amount: 3,
    },
]



function basketAdd(good){
    let res = 0;
    for (let i=0; i < basket.length; i++){
        if ( basket[i].id = good.id ){
            basket[i].amount += 1; 
            res += 1;
            exit;
        }
    }
    if (res === 0 ){
        basket.push(
            {
                id: good.id,
                amount: 1,
            }
        );
    }
}

function basketRemove(good){
    let res = 0;
    for (let i=0; i < basket.length; i++){
        if (basket[i].id = good.id ){
            basket[i].amount -= 1; 
            if ( basket[i].amount = 0 ){
                basket.splice(i, 1)
            }
            exit;
        }
    }
}

function basketClear(){
    basket = []
}

function totalAmount(){
    let total = 0;
    for (let i=0; i < basket.length; i++){
        total += basket[i].amount;
    }
    return total
}

function totalSumm(){
    let total = 0;
    for (let i=0; i < basket.length; i++){
        total += goods.filter(good => good.id == basket[i].id)[0].price * basket[i].amount
    }
    return total
}

alert(totalAmount());
alert(totalSumm());
