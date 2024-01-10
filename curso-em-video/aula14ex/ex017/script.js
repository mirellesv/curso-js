function mostrar_tabuada(){
    var txtnum = document.querySelector('input#txtnum')
    var tab = document.querySelector('select#seltab')

    if(txtnum.value.length == 0){
        window.alert('Por favor, insira um número.')
    }else{
        var num = Number(txtnum.value)
        tab.innerHTML = ''

        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option')

            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item) 
        }
    }
}