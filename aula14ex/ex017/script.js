function mostrar_tabuada(){
    var txtnum = document.querySelector('input#txtnum')
    var num = txtnum.value
    var res_tab = document.querySelector('div#res_tab')

    res_tab.innerHTML = ''

    if(txtnum.value.length == 0){
        window.alert('Por favor, insira um número.')
    }else{
        for(var i = 1; i <= 10; i++){
            res_tab.innerHTML += num + ' x ' + i + ' = ' + num*i
            res_tab.innerHTML += '<br>'
        }
    }
}