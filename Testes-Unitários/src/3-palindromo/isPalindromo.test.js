const {isPalindromo} = require('./isPalindromo');
test('palindromo', ()=>{
    expect(isPalindromo("A .na;;")).toBe(true);
});
test('multiplicar por zero', ()=>{
    expect(isPalindromo("Deve dar errado")).toBe(false);
});