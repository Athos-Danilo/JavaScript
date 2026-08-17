
// =====> O TIPO NUMBER, OPERAÇÕES ARITMÉTICAS E SPECIAL NUMBERS <=====

//===> 1. Aprofundando no tipo Number

/*
  Em muitas linguagens de programação (como Java ou C), você precisa avisar
  se um número é Inteiro (int) ou Decimal/Quebrado (float/double). 
  
  O JavaScript simplifica isso: existe apenas UM tipo para números. 
  Tudo é classificado como 'number'.
  
  Por baixo dos panos, o JS armazena todos os números no formato de 
  "Ponto Flutuante de Dupla Precisão" (padrão IEEE 754). Isso permite 
  que a mesma variável guarde números muito grandes, muito pequenos, 
  inteiros ou com casas decimais.
*/

let idade = 25;           // Número inteiro
let preco = 19.99;        // Número decimal (Sempre use PONTO, nunca vírgula)
let temperatura = -10;    // Números negativos
let numeroGigante = 2e5;  // Notação científica (2 x 10^5 = 200000)

console.log("=== O Tipo Number ===");
console.log(typeof preco); // Imprime: 'number'


//===> 2. Operações Aritméticas (O JavaScript como Calculadora)

// O JavaScript possui operadores matemáticos nativos para realizar cálculos.

let a = 10;
let b = 3;

console.log("\n=== Operações Básicas ===");
console.log("Soma (+):", a + b);         // 13
console.log("Subtração (-):", a - b);    // 7
console.log("Multiplicação (*):", a * b); // 30
console.log("Divisão (/):", a / b);      // 3.3333333333333335
console.log("Exponenciação (**):", a ** b); // 1000 (10 elevado a 3)

/*
  O OPERADOR MÓDULO (%) - O "Resto" da Divisão
  
  O símbolo % NÃO significa porcentagem no JavaScript. Ele retorna o 
  RESTO de uma divisão inteira. 
  
  Para que isso serve no mundo real?
  A aplicação mais clássica do Módulo é descobrir se um número é PAR ou ÍMPAR.
  Se você divide um número por 2 e o resto (módulo) for 0, ele é par.
  Se o resto for 1, ele é ímpar.
*/

console.log("\n=== O Operador Módulo ===");
console.log("Resto de 10 por 3:", 10 % 3); // Imprime 1 (Pois 3*3 = 9. Para 10, sobra 1)
console.log("10 é par?", 10 % 2 === 0);    // true (Resto de 10 por 2 é 0)


//===> 3. Precedência de Operadores (Ordem Matemática)

/*
  Assim como na matemática escolar, o JavaScript respeita uma ordem 
  de resolução:
  1º: Parênteses ( )
  2º: Exponenciação **
  3º: Multiplicação * e Divisão /
  4º: Soma + e Subtração -
*/

console.log("\n=== Precedência ===");
let contaSemParenteses = 5 + 5 * 2; // JS faz a multiplicação primeiro (5 * 2) + 5
console.log(contaSemParenteses);    // Imprime: 15

let contaComParenteses = (5 + 5) * 2; // JS resolve os parênteses primeiro
console.log(contaComParenteses);      // Imprime: 20


//===> 4. Special Numbers (Os números "Diferentões")

/*
  O JavaScript possui três valores numéricos que representam conceitos
  matemáticos abstratos ou erros. Embora sejam bizarros, eles AINDA 
  são considerados do tipo 'number'.
*/

console.log("\n=== Special Numbers ===");

// --- 4.1 INFINITY e -INFINITY ---
// Representa o infinito positivo ou negativo. Geralmente ocorre quando 
// um número excede o limite máximo que o computador aguenta calcular 
// ou em divisões por zero (em outras linguagens, dividir por zero quebra 
// o programa; no JS, gera Infinity).

let infinitoPositivo = Infinity;
let divisaoPorZero = 10 / 0;

console.log("10 dividido por 0 é:", divisaoPorZero); // Imprime: Infinity
console.log(typeof Infinity); // Imprime: 'number'


// --- 4.2 NaN (Not a Number - Não é um número) ---
// É o resultado de uma operação matemática que não faz sentido lógico.
// Geralmente acontece quando você tenta fazer contas usando textos que 
// não contêm números.

let calculoInvalido = "Laranja" * 5; 

console.log("Multiplicar texto por número:", calculoInvalido); // Imprime: NaN

/*
  PEGADINHA CLÁSSICA DE ENTREVISTAS DE EMPREGO:
  Qual é o tipo de dado do NaN (Não é um número)?
*/
console.log("O tipo do NaN é:", typeof NaN); // Imprime: 'number'

/*
  Explicação: O 'NaN' é um valor da categoria dos números, usado justamente 
  para avisar que "houve uma tentativa de criar um número numérico, mas ela 
  falhou". É como se o JS dissesse: "Isso deveria ser um number, mas deu erro".
*/


//===> 5. BÔNUS: A Bizarra Precisão Decimal do JavaScript

/*
  Lembra que falamos que o JS usa o formato IEEE 754?
  Esse formato não consegue representar perfeitamente certas frações 
  decimais em base binária (a linguagem do computador). 
  Isso gera um dos memes mais famosos da programação.
*/

console.log("\n=== O problema das frações decimais ===");
console.log("Quanto é 0.1 + 0.2?");
console.log(0.1 + 0.2); 
// Imprime: 0.30000000000000004 e não 0.3!

/*
  Por que isso acontece? O computador tenta arredondar frações infinitas
  e acaba deixando um minúsculo resíduo. 
  Quando você for trabalhar com dinheiro (onde centavos importam), 
  a dica de ouro é: multiplique tudo por 100 para transformar em 
  inteiros, faça a conta, e depois divida por 100!
*/