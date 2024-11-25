module.exports = [
    {
      files: ['**/*.js'],
      rules: {
        'semi': ['error', 'always'],//exige o uso de ;
        "eqeqeq": ["error", "always"],//exige uso de === e não ==.
        "no-var": "error",//Proíbe que var seja utilizado.
        "curly": "error",//Proíbe omissão de chaves em blocos.
        
      },
    },
  ];
  