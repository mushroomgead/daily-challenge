function evenDigitsOnly(n) {
    return n.toString().split('').every(num => parseInt(num) % 2 === 0)
    
}

console.log(evenDigitsOnly(248622)) // true
console.log(evenDigitsOnly(642386)) // false