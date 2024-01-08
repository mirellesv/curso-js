function fatorial(n){
    var fat = 1

    if(n == 1){
        return 1
    }else{
        return fat = n * fatorial(n - 1)
    }
}

console.log(fatorial(5))