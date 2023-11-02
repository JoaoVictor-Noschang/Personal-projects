/*algoritmo para converter o material de tonelada
para metros cúbicos de acordo com o material
selecionado pelo usuário */

function converterMaterial(){
    var conv = material();
    var ton = document.getElementById('tonelada').value;
    converter(ton, conv);
}

// para encontrar a unidade de conversão de acordo com o material
function material(){

    var mate = document.getElementsByName('material');
    var uni = 0;

    if (mate[0].checked){
        uni = 1.5;
    } else if (mate[1].checked){
        uni = 1.41;
    } else if (mate[2].checked){
        uni = 1.37;
    }
    return uni;
}

// faz a conversão e ampresenta os resultado necessários
function converter(tonelada, conversor){

    var resposta = '';

    var arredonda = Math.round(tonelada / conversor);
    resposta += `<p>Em M³ o valor é: ${arredonda} m³</p>`;

    var valFrac = parseFloat(arredonda / tonelada);
    resposta += `<p>Para o multiplicadr o valor é ${valFrac}</p>`;

    document.getElementById("res").innerHTML = resposta;

    /*  VERIFICAÇÃO 
    valFrac = valFrac * ton;
    console.log(valFrac);
    */
}

