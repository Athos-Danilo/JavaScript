
// =====> VARIÁVEIS, DECLARAÇÃO E ESCOPO <=====

//===> 1. O que são variáveis?

/* 
  Na ciência da computação, uma variável é um espaço alocado na memória RAM 
  do computador, que recebe um identificador (um nome) para armazenar um dado 
  que será usado ou manipulado durante a execução do programa.
  
  No JavaScript, a forma como você "reserva" esse espaço na memória mudou com
  o tempo. Hoje, o JavaScript possui três palavras-chave para declaração:
  'var', 'let' e 'const'. Cada uma possui regras estritas sobre o "escopo" 
  (onde a variável existe) e "mutabilidade" (se pode ser alterada).
*/


//===> 2. A fundação: var, let e const:

/*
 VAR (A forma antiga - ECMAScript 5 ou anterior)
 O 'var' é uma forma antiga de declarar variáveis no JavaScript.
 A principal diferença é que o 'var' NÃO respeita blocos de código.
 Por exemplo, um 'if' possui um bloco entre { }:
 
     if (true) {
         var nome = "Maria";
     }

 Mesmo que 'nome' tenha sido criada dentro do 'if', podemos acessá-la
 fora dele. Isso acontece porque o 'var' possui escopo de função, e não
 escopo de bloco.

 Além disso, o 'var' possui um comportamento chamado "Hoisting".
 De forma simples, significa que o JavaScript considera a declaração
 da variável antes da execução do código.

 Por exemplo:

     console.log(nome);
     var nome = "Maria";

 Isso não gera um erro de variável inexistente. O resultado será
 'undefined', porque o JavaScript entende a situação de forma parecida
 com isto:

     var nome;
     console.log(nome); // undefined
     nome = "Maria";

 Ou seja: a declaração é considerada primeiro, mas o valor só é colocado
 na variável quando o código chega naquela linha.
*/

var nomeAntigo = "Maria"; 

/*
 LET (A forma moderna mutável)
 O 'let' tem "escopo de bloco". Isso significa que se você declarar um 'let' 
 dentro de chaves { }, ele só existirá ali dentro. 
 Use 'let' SEMPRE que você souber que o valor dessa variável precisará ser 
 reatribuído (modificado) em algum momento do fluxo do código.
*/

let idade = 25; 

/*
 CONST (A forma moderna imutável)
 Assim como o 'let', tem escopo de bloco. Porém, a principal regra da 'const'
 é: ela deve ser inicializada no momento da declaração e a sua referência 
 (o vínculo com o valor) NUNCA pode ser reatribuída.
 É a opção mais segura. Uma boa prática de engenharia de software é: use 
 'const' por padrão. Mude para 'let' apenas se for estritamente necessário.
*/

const pais = "Brasil";


//===> 3. Reatribuição de valores:

// Como declaramos 'idade' com 'let' lá em cima, o JavaScript nos permite atualizar o valor alocado na memória:
idade = 26; // Válido e correto.

// Como declaramos 'pais' com 'const', qualquer tentativa de reatribuição irá disparar um erro fatal (TypeError) 
// que trava a execução do script:
pais = "Argentina"; // ERRO! Assignment to constant variable.

/*
  Dúvida: E se eu simplesmente escrever "idade = 26"?

  Nesse caso, NÃO significa que o JavaScript criou automaticamente um
  'let', 'const' ou 'var'.

  Se 'idade' ainda não existir, o JavaScript pode criar uma variável
  GLOBAL de forma automática. Esse comportamento é chamado de
  "Variável Global Implícita".

  O problema é que essa variável pode ficar disponível em várias partes
  do programa, mesmo que você não tenha planejado isso.

  Por exemplo:

      function cadastrar() {
          nome = "Maria";
      }

  Mesmo sem escrever 'let', 'const' ou 'var', 'nome' pode acabar sendo
  criada como uma variável global.

  Isso é perigoso porque outra parte do programa pode alterar essa
  variável sem você perceber. Em projetos grandes, isso pode causar
  bugs difíceis de encontrar.

  COMO EVITAR ISSO? O MODO ESTRITO ('use strict')

  Para evitar esse tipo de problema, podemos usar o "Strict Mode".

  'use strict' ativa um modo mais rigoroso do JavaScript. Ele faz 
  o JavaScript impedir vários comportamentos que poderiam causar 
  erros ou bugs, incluindo criar variáveis sem declarar.

  Basta colocar:

      'use strict';

  no início do arquivo ou de uma função.

  Com o Strict Mode ativado, isto:

      'use strict';

      idade = 26;

  irá gerar um 'ReferenceError', porque 'idade' não foi declarada.

  Assim, o JavaScript basicamente está dizendo:

      "Você quer criar uma variável? Então declare ela corretamente!"

  Portanto, sempre prefira declarar suas variáveis explicitamente:

      let idade = 26;
      const nome = "Maria";
*/
