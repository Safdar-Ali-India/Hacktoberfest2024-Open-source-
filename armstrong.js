function isArmstrong(number) {
    let sum = 0;
    let temp = number;
    const digitsCount = number.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digitsCount);
        temp = Math.floor(temp / 10);
    }

    return sum === number;
}

// Driver code
let N = 1000;

for (let i = 1; i <= N; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}
