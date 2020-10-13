function calBEU(fc, sp, vc){
    beu = fc/(sp-vc) // fc = fixed cost, sp = selling price per unit, vc = variable cost per unit
    return beu + "บาท"
}

function display(elementID, value){
    document.getElementById(elementID).innerHTML = value
}
// function cal(){

// }