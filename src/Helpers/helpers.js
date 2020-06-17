function formatCurrency(currency){
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currency);
}

function formatPerc(perc){
    return `${perc.toFixed(2)}%`;
}


export {formatCurrency, formatPerc}