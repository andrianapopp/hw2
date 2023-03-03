const x = prompt("number");
const y = prompt("number");

function sum(x, y) {
    let z = parseFloat(x) + parseFloat(y)
    alert(`Результат: ${x} + ${y}=${z}`)
}
sum(x, y)

function subtraction(x, y) {
    let z = x - y
    alert(`Результат: ${x} - ${y}=${z}`)
}
subtraction(x, y)

function multiplication(x, y) {
    let z = x * y
    alert(`Результат: ${x} * ${y}=${z}`)
}
multiplication(x, y)

function division(x, y) {
    let z = x / y
    alert(`Результат: ${x} / ${y}=${z}`)
}
division(x, y)