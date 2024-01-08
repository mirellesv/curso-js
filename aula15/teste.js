let A = []

A[0] = 3
A.push(5, 2)

console.log(A)
/*
for(var pos = 0; pos < A.length; pos++){
    console.log(`A posição ${pos} do vetor possui o elemento ${A[pos]}`)
}
*/
for(var pos in A){
    console.log(`A posição ${pos} do vetor possui o elemento ${A[pos]}`)
}

pos = A.indexOf(3)

if(pos != -1){
    console.log(`O valor foi encontrado na posição ${pos} do vetor A`)
}else{
    console.log('O valor não está presente no vetor A')
}