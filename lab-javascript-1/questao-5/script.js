function primo(num) {
    for(let i = 2; i < num; ++i) {
        if(num % i == 0) return false
    }
    return true
}

for(let i = 2; i <= 1000; ++i) {
    if(primo(i)) {
        console.log(i)
    }
}
