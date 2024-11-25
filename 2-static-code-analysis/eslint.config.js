module.exports = [
    {
      files: ['**/*.js'],
      rules: {
        'semi': ['error', 'always'],//exige o uso de ;
        "eqeqeq": ["error", "always"],//exige uso de === e não ==.
        "no-var": "error",//Proíbe que var seja utilizado.
        "curly": "error",//Proíbe omissão de chaves em blocos.
        'no-unreachable': 'error', //Detecta código após um return, este que impossibilitaria o resto do código.
        'no-console': 'warn', //Avisa sobre o uso de console.log.
        'indent': ['error', 2], // Força indentação de 2 espaços, tornando o código mais legível.
      },
    },
  ];
  