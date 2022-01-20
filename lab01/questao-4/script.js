function fib(posicao) {
    switch(posicao) {
        case 1:
            return 1
        case 2:
            return 2
        default:
            return fib(posicao - 1) + fib(posicao - 2)
    }
}

for(let i = 1; i <= 100; ++i) {
    console.log(`Fibonacci na posição ${i} = ${fib(i)}`)
}
