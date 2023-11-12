const main = (n) => {
    for (let i=3; i<n; i++) if ((n % i) === 0) return false
    return true
}

console.log(main(1), main(2), main(3), main(7), main(10))