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
        'prefer-const': 'error', // Sugere usar const quando possível.
        'no-multi-spaces': 'error', // Impede múltiplos espaços desnecessários
        "no-undef": "error",// Proíbe o uso de variáveis undefined
        "quotes": ["error", "single"],//Exige aspas simples para strings, se usar double como parâmetro passa a exigir duplas
        "space-before-function-paren": ["error", "always"],//Lida com espaços ao abrir parênteses em funções.
        "no-multiple-empty-lines": ["error", { "max": 1 }]//múltiplos espaços em sequência, deixa o código poluído.
      },
    },
  ];
  