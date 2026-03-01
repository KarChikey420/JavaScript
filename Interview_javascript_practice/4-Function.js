function square(num){
    return num*num;
}

function printSquare(fn){
    const result=fn(5);
    console.log(result);
}

printSquare(square);