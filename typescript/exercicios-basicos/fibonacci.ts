function fibonacci(n:number):number[]{
    let a = 0
    let b = 1
    let saida : number[] = []
    while (a < n){
        saida.push(a)
        let temp = a
        a = b
        b = b+temp
    }
    return saida
}

console.log(fibonacci(5))