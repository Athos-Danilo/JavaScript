
// =====> TIPOS DE DADOS E O OPERADOR TYPEOF <=====

//===> 1. O que são Tipos de Dados?

/* 
  Na programação, se as variáveis são como "caixas", os Tipos de Dados 
  definem o formato e o comportamento daquilo que guardamos dentro delas.
  O computador precisa saber se está lidando com um texto para exibir na tela,
  um número para fazer cálculos matemáticos, ou uma resposta de sim/não.

  No JavaScript, a tipagem é "dinâmica". Isso significa que você não precisa 
  avisar ao computador qual é o tipo da variável no momento em que a cria 
  (como é exigido em linguagens como Java ou C). O próprio JavaScript 
  descobre o tipo automaticamente com base no valor que você coloca lá dentro.
*/


//===> 2. Como descobrir o tipo de um dado? 

/*
  Como o JavaScript descobre os tipos sozinho, às vezes, durante a execução
  do programa, nós precisamos perguntar a ele: "Que tipo de dado é esse?".
  
  Para isso, usamos um operador nativo chamado 'typeof'.
  
  Ele funciona como um "raio-x": você coloca a palavra 'typeof' antes da 
  variável ou do valor, e ele devolve um texto (string) dizendo a qual 
  categoria aquele dado pertence.

  let nome = "Athos";
  console.log(typeof nome); // string
*/


//===> 3. Visão Geral dos Tipos (Primitivos principais)

/*
  Abaixo, vamos fazer um sobrevoo pelos tipos de dados mais comuns que você 
  vai encontrar. Mais para frente, teremos um aprofundamento em cada um deles!
*/

// --- 3.1 NUMBER (Números) ---
// Representa qualquer número, seja ele inteiro (positivo ou negativo) ou 
// decimal. Lembre-se: em JavaScript, decimais usam ponto, não vírgula.

let idade = 30;
let temperatura = -5.5;

console.log("=== Analisando Numbers ===");
console.log(idade); // Imprime: 30
console.log(typeof idade); // Imprime: 'number'
console.log(typeof temperatura); // Imprime: 'number'


// --- 3.2 STRING (Textos) ---
// Representa textos ou cadeias de caracteres. Para o JavaScript entender
// que é um texto, o valor OBRIGATORIAMENTE precisa estar entre aspas simples (''),
// aspas duplas ("") ou crases (``).

let saudacao = "Olá, mundo!";
let numeroEmFormatoDeTexto = "100"; // Atenção: tem aspas, então é texto!

console.log("\n=== Analisando Strings ===");
console.log(typeof saudacao); // Imprime: 'string'
console.log(typeof numeroEmFormatoDeTexto); // Imprime: 'string' (Não é 'number'!)


// --- 3.3 BOOLEAN (Verdadeiro ou Falso) ---
// É o tipo de dado mais simples. Só aceita dois valores absolutos: 
// true (verdadeiro) ou false (falso).
// É a espinha dorsal da lógica de decisão e das estruturas condicionais (if/else).

let sistemaAtivo = true;
let possuiAcesso = false;

console.log("\n=== Analisando Booleans ===");
console.log(typeof sistemaAtivo); // Imprime: 'boolean'
console.log(typeof possuiAcesso); // Imprime: 'boolean'


// --- 3.4 UNDEFINED (Indefinido) ---
// Acontece quando você cria uma variável, mas ainda não atribuiu nenhum 
// valor a ela. A caixa existe na memória, mas o JavaScript diz que 
// o conteúdo dela é, por enquanto, "indefinido".

let valorFuturo;

console.log("\n=== Analisando Undefined ===");
console.log(typeof valorFuturo); // Imprime: 'undefined'


// --- 3.5 NULL (Nulo / Vazio) ---
// É quando você, como programador, diz intencionalmente que aquela variável
// está vazia ou não tem valor nenhum. Diferente do undefined (onde o JS 
// simplesmente não sabe o que é), no null você limpou o valor de propósito.

let caixaVazia = null;

console.log("\n=== Analisando Null (Atenção aqui!) ===");

/*
  PEGADINHA HISTÓRICA DO JAVASCRIPT:
  Se você usar o typeof no null, veja o que acontece:
*/
console.log(typeof caixaVazia); // Imprime: 'object'

/*
  Por que 'object' e não 'null'?
  Isso é um "bug" (erro) reconhecido na própria criação da linguagem 
  JavaScript lá nos anos 90. Na época, os valores eram armazenados de 
  uma forma específica e o 'null' acabou caindo na mesma categoria dos objetos.
  
  Esse erro nunca foi corrigido para não quebrar a internet, já que sites 
  antigos parariam de funcionar se eles mudassem isso hoje. 
  
  Mas guarde a teoria: conceitualmente, 'null' é um tipo primitivo vazio, 
  mesmo que o 'typeof' teime em chamá-lo de 'object'.
*/