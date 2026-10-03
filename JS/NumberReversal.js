let num = 987654321;
let reversed = 0;

while (num != 0) {
    let digit = num % 10;          // extract last digit
    reversed = reversed * 10 + digit; // build reversed number
    num = Math.floor(num / 10);    // remove last digit properly
}

console.log(reversed);  