
function isPalindromo(entrada){
    let compare
    if(typeof entrada !== 'string'||entrada.replace(/\s/g, '')
    .replace(/[.,;:]/g, '',)==""||entrada.replace(/\s/g, '')
    .replace(/[.,;:]/g, '',)==null || entrada.replace(/\s/g, '')
    .replace(/[.,;:]/g, '',)==undefined){
  
      console.log('erro')
      process.exit()
    }else{
      
      compare=entrada
      .toLowerCase()
      
      .replace(/\s/g, '')
      .replace(/[.,;:]/g, '',)
      .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      .split('');     
    }



let different = false;
const compare1 = compare.reverse()
for(var i=0, o=compare.length-1;i<compare.length;i++,o--){

 if(compare[i]!=compare1[o]){
  different = true;
 }
}
  if(different===false){
    console.log("yes")
    return true
    
  }else{
    console.log("no")
    return false
  }
}

module.exports ={isPalindromo}