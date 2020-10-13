function calBEU(){
    var fc = document.data.fc.value
    var sp = document.data.sp.value
    var vc = document.data.vc.value
    var beu = fc/(sp-vc) // fc = fixed cost, sp = selling price per unit, vc = variable cost per unit
    return beu
}

function display(elementID, value){
    document.getElementById(elementID).innerHTML = value
}

display("result", beu)