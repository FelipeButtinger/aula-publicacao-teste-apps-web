function processString(entrada) {
  if(entrada.replace(/\s/g, '')
  .replace(/[.,;:]/g, '',)==""||entrada.replace(/\s/g, '')
  .replace(/[.,;:]/g, '',)==null || entrada.replace(/\s/g, '')
  .replace(/[.,;:]/g, '',)==undefined){

    console.log('erro')
    process.exit()
  }else{

    return entrada
    .toLowerCase()
    
    .replace(/\s/g, '')
    .replace(/[.,;:]/g, '',)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    .split('');     
  }}
  const palindromo = processString("a n a");
  
isPalindromo(palindromo)
function isPalindromo(entrada){
let different = false;
const compare = entrada.reverse()
console.log(entrada.length)
console.log(entrada + compare)
for(var i=0, o=entrada.length-1;i<entrada.length;i++,o--){

 if(entrada[i]!=compare[o]){
  different = true;
 }
}
  if(different===false){
    console.log("É um palíndromo")
  }else{
    console.log("Não é um palíndromo")
  }
}