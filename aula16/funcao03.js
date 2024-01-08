function fatorial(n){
    var fat = 1

    for(var i = 1; i <= n; i++){
        fat *= i
    }

    return fat
}

console.log(fatorial(5))