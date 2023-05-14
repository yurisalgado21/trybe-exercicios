let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let nemArray = []
for (let index = 0; index < numbers.length; index += 1) {
    if (index < (numbers.length - 1)) {
        nemArray.push(numbers[index] * numbers[index + 1])
    } else {
        nemArray.push(numbers[index] * 2)
    }
}
console.log(nemArray);

//Exercício 3:
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosicion = n - 1;
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columIndex = 0; columIndex < n; columIndex += 1) {
        if (columIndex < inputPosicion) {
            inputLine += ' ';
        } else {
            inputLine += symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosicion -= 1;
}