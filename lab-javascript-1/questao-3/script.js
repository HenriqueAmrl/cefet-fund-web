function somaRangePares(comeco, final) {
    let soma = 0

    for(let i = comeco; i <= final; i += 2) {
        soma += i
    }
    return soma
}

console.log(`Soma de todos os pares de 0 a 1000 = ${somaRangePares(0, 1000)}`)