function fatorial(num) {
    switch(num) {
        case num < 0:
            return "Informe um número maior ou igual a 0"
        case num <= 1:
            return 1
        default:
            return num * fatorial(num - 1)
    }
}
    
console.log(`Fatorial de 12 = ${fatorial(12)}`)