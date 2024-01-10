var idade = 18

console.log(`Você tem ${idade} anos.`)

if(idade < 16){
    console.log('Não está apto para votar.')
}else if(idade < 18 || idade >= 70){
    console.log('Voto opcional.')
}else{
    console.log('Voto obrigatório.')
}