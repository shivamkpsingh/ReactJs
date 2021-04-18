
function Sum(a, b) {
    let c = a + b;
    return c
}
function Sub(a, b) {
    let c = a - b;
    return c
}
function Mul(a, b) {
    let c = a * b;
    return c
}
function Div(a, b) {
    let c = (a / b).toFixed(2);
    return c
}

export default Sum;
export { Sub, Mul, Div };