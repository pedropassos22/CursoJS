let varA='A';
let varB='B';
let varC='C';


varR = varC;

varC = varA;
varA = varB;
varB = varR;

console.log (varC, varA, varB);