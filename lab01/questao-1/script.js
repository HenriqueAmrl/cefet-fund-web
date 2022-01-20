function fatorial(num) {
    if(num < 0)
        return "Informe um número maior ou igual a 0"
    if(num <= 1)
        return 1
    return num * fatorial(num - 1)
}
    
console.log(`Fatorial de 12 = ${fatorial(12)}`)
