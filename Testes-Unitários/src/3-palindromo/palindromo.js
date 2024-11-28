function processString(entrada) {
  if(typeof entrada !== 'string'||entrada.replace(/\s/g, '')
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
 
  module.exports={processString}
  
