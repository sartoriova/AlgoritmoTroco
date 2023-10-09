document.addEventListener("keypress", function (e) {

    if (e.key == "Enter") {
        const btn_inserir = document.getElementById("usuario")
        btn_inserir.click(melhorTroco())
    }

})

function melhorTroco(){
    var valor_usuario = window.document.getElementById("usuario")
    var valor = parseFloat(valor_usuario.value)
    var div = window.document.getElementById("resultado")

    if ( (isNaN(valor)) || (valor == 0)  ) {
        div.innerHTML = ""
        window.alert("Ops! Nenhum valor foi informado :( \nPor favor, informe um valor no seu respectivo campo!")
    }else if (valor < 0){
        div.innerHTML = ""
        window.alert("Ops! Valor invalido (número negativo) :( \nPor favor, informe um valor válido no seu respectivo campo!")
    }
    else {
        var cont = 0;
        var guarda_cont = {};
        var lista_reais = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01]
        div.innerHTML = ""
        div.innerHTML = div.innerHTML + "Você irá precisar de..." + "<br>"
        for (indice in lista_reais){
            while (valor >= lista_reais[indice]){
                valor = valor - lista_reais[indice]
                cont = cont + 1
            }
            guarda_cont[ lista_reais[indice] ] = cont
            cont = 0
        }

    
        for (chave in guarda_cont){
            if ( (guarda_cont[chave] != 0) && (chave > 1) ){
                div.innerHTML = div.innerHTML + `${guarda_cont[chave]} nota(s) de R$ ${chave}` + "<br>"
            }else if ( (guarda_cont[chave] != 0) && (chave <= 1) ){
                div.innerHTML = div.innerHTML + `${guarda_cont[chave]} moeda(s) de R$ ${chave}` + "<br>"
            }
        }
    }
}