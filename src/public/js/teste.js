function calculaTotal (vlr,m) {

    let total = vlr
    
    for (let i = 2; i<=m; i++) {
        vlr = vlr * 2
        total = total + vlr
        console.log ('Mês ',i,', valor do mês ',vlr.toFixed(2), ', valor total ', total.toFixed(2))
    }

    return console.log (vlr.toFixed(2), ' ', total.toFixed(2))
}


calculaTotal(0.01,72)
