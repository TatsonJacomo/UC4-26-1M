1. Função dobrar
function dobrar(numero: number): number {
  return numero * 2;
}

console.log(dobrar(5)); // 10
console.log(dobrar(10)); // 20

Entendendo
function dobrar(numero: number): number

Aqui temos três partes importantes:

dobrar → nome da função.
numero: number → o parâmetro numero deve ser um número.
: number depois dos parênteses → significa que a função retorna um número.
Então:
dobrar(5)

é válido.
Mas:
dobrar("5")

gera erro no TypeScript, porque "5" é uma string, não um number.
A operação:
return numero * 2;

pega o número recebido e multiplica por 2.
Regra para lembrar:

function nome(parametro: Tipo): TipoRetorno {
  // código
}

2. Função saudacao
function saudacao(nome: string): string {
  return "Olá, " + nome;
}

console.log(saudacao("Daniel"));
// Olá, Daniel

Entendendo
O parâmetro:

nome: string

significa que nome precisa ser um texto.

E:

): string

significa que a função retorna uma string.

Quando fazemos:

saudacao("Daniel")

a função recebe:

nome = "Daniel"

e executa:

return "Olá, " + nome;

resultando em:

Olá, Daniel

Também poderíamos escrever usando template string, que é muito comum em JavaScript/TypeScript:

function saudacao(nome: string): string {
  return `Olá, ${nome}`;
}

Essa forma costuma ser mais prática quando precisamos misturar texto e variáveis.

3. Array de strings + forEach
const amigos: string[] = [
  "Ana",
  "Carlos",
  "Mariana",
  "João"
];

amigos.forEach((amigo: string) => {
  console.log(amigo);
});

Entendendo o string[]
Essa parte:

string[]

significa:

"Um array onde todos os elementos são strings."

Por isso isto é válido:

const amigos: string[] = [
  "Ana",
  "Carlos",
  "Mariana"
];

Mas isto não:

const amigos: string[] = [
  "Ana",
  "Carlos",
  25
];

Porque 25 é um number.

E o forEach?
amigos.forEach((amigo: string) => {
  console.log(amigo);
});

O forEach percorre cada elemento do array.

Imagine:

amigos
   ↓
["Ana", "Carlos", "Mariana"]

O forEach pega um por vez:

"Ana"       → amigo
"Carlos"    → amigo
"Mariana"   → amigo

E executa:

console.log(amigo);

para cada um.

Uma coisa interessante: nesse caso, o TypeScript consegue descobrir automaticamente que amigo é uma string. Portanto, poderíamos escrever simplesmente:

amigos.forEach((amigo) => {
  console.log(amigo);
});

Isso é chamado de inferência de tipos.

4. Tupla [nome, idade]
const pessoa: [string, number] = ["Daniel", 25];

console.log(pessoa[0]); // Daniel
console.log(pessoa[1]); // 25

O que é uma tupla?
Uma tupla é parecida com um array, mas define a posição e o tipo de cada elemento.

Aqui:

[string, number]

significa:

posição 0 → string
posição 1 → number

Portanto:

["Daniel", 25]

está correto.

Mas:

[25, "Daniel"]

não está correto para esse tipo.

Também não seria correto:

["Daniel", "25"]

porque "25" é uma string.

Array vs. tupla
Array:

string[]

significa:

"Tenho vários valores e todos são strings."

Tupla:

[string, number]

significa:

"Tenho dois valores: o primeiro é string e o segundo é number."

Essa diferença é muito importante.

5. enum para níveis de acesso
enum NivelAcesso {
  ADMIN,
  USER,
  GUEST
}

let nivel: NivelAcesso = NivelAcesso.ADMIN;

console.log(nivel);

O que é um enum?
O enum permite criar um conjunto de valores com nomes.

Criamos:

enum NivelAcesso {
  ADMIN,
  USER,
  GUEST
}

Agora podemos usar:

NivelAcesso.ADMIN
NivelAcesso.USER
NivelAcesso.GUEST

Por exemplo:

function verificarAcesso(nivel: NivelAcesso): void {
  console.log(`Nível recebido: ${nivel}`);
}

verificarAcesso(NivelAcesso.ADMIN);
verificarAcesso(NivelAcesso.USER);

O benefício é que, em vez de ficar espalhando strings pelo código:

"admin"
"user"
"guest"

podemos trabalhar com um conjunto definido de valores.

Uma observação importante
Por padrão, esse enum gera valores numéricos:

ADMIN → 0
USER  → 1
GUEST → 2

Se você quiser valores textuais, pode fazer:

enum NivelAcesso {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}

Nesse caso:

console.log(NivelAcesso.ADMIN);

produzirá:

ADMIN

6. Objeto pessoa com propriedades tipadas
const pessoa: {
  nome: string;
  idade: number;
  email: string;
} = {
  nome: "Daniel",
  idade: 25,
  email: "daniel@email.com"
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.email);

Entendendo
Estamos dizendo ao TypeScript:

const pessoa: {
  nome: string;
  idade: number;
  email: string;
}

Ou seja, pessoa precisa ter:

nome  → string
idade → number
email → string

Então isto está correto:

const pessoa = {
  nome: "Daniel",
  idade: 25,
  email: "daniel@email.com"
};

Mas isto daria erro:

const pessoa: {
  nome: string;
  idade: number;
  email: string;
} = {
  nome: "Daniel",
  idade: "25",
  email: "daniel@email.com"
};

Porque:

idade: "25"

é uma string.

Enquanto o tipo exige:

idade: number

Uma forma melhor para projetos maiores
Quando começamos a ter muitos objetos com a mesma estrutura, podemos criar um type:

type Pessoa = {
  nome: string;
  idade: number;
  email: string;
};

const pessoa: Pessoa = {
  nome: "Daniel",
  idade: 25,
  email: "daniel@email.com"
};

Isso evita repetir a estrutura.

7. Função never
function erro(): never {
  throw new Error("Algo deu errado!");
}

erro();

O que significa never?
never representa algo que nunca termina normalmente.

Por exemplo:

function erro(): never {
  throw new Error("Algo deu errado!");
}

Quando essa função é executada:

erro();

ela lança uma exceção:

Error: Algo deu errado!

Ela não retorna:

return algumaCoisa;

e também não chega ao final normalmente.

Por isso usamos:

never

void vs. never
Essa diferença é importante:

void
A função termina normalmente, mas não retorna um valor:

function mostrarMensagem(): void {
  console.log("Olá!");
}

Ela executa:

Olá!

e termina.

never
A função nunca termina normalmente:

function erro(): never {
  throw new Error("Erro!");
}

Portanto:

void  → termina sem retornar valor
never → nunca termina normalmente

8. Projeto com src/, dist/ e tsconfig.json
Agora vamos montar o projeto completo.

A estrutura final será:

projeto-typescript/
│
├── node_modules/
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js
│
├── package.json
├── package-lock.json
└── tsconfig.json

Passo 1 — Criar o projeto
No terminal:

mkdir projeto-typescript
cd projeto-typescript
npm init -y

Isso cria o:

package.json

Passo 2 — Instalar TypeScript
Como dependência de desenvolvimento:

npm install -D typescript

Você não precisa necessariamente instalar o TypeScript globalmente para cada projeto.

Depois poderá usar:

npx tsc

Passo 3 — Criar o tsconfig.json
Execute:

npx tsc --init

Depois podemos configurar:

{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "nodenext",
    "target": "esnext",
    "strict": true
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["./node_modules", "./dist"]
}

O que cada configuração faz?
rootDir
"rootDir": "./src"

Diz:

"Meu código TypeScript está dentro de src."

outDir
"outDir": "./dist"

Diz:

"Coloque os arquivos JavaScript gerados dentro de dist."

Então:

src/index.ts
       ↓
    TypeScript
       ↓
dist/index.js

target
"target": "esnext"

Define para qual versão do JavaScript o TypeScript deve compilar.

strict
"strict": true

Ativa verificações mais rigorosas do TypeScript.

É uma configuração muito útil para aprender e também para evitar vários problemas em projetos reais.

include
"include": ["./src/**/*.ts"]

Diz quais arquivos TypeScript devem ser considerados.

Nesse caso:

src/index.ts
src/test.ts
src/utils/helper.ts

etc.

exclude
"exclude": ["./node_modules", "./dist"]

Diz quais pastas devem ser ignoradas.

🧪 Juntando todos os exercícios
Agora podemos colocar tudo em um único arquivo:

src/index.ts

// 1. Função dobrar
function dobrar(numero: number): number {
  return numero * 2;
}

console.log(dobrar(5));


// 2. Função saudacao
function saudacao(nome: string): string {
  return `Olá, ${nome}`;
}

console.log(saudacao("Daniel"));


// 3. Array de strings
const amigos: string[] = [
  "Ana",
  "Carlos",
  "Mariana",
  "João"
];

amigos.forEach((amigo) => {
  console.log(amigo);
});


// 4. Tupla
const pessoaTupla: [string, number] = ["Daniel", 25];

console.log(pessoaTupla[0]);
console.log(pessoaTupla[1]);


// 5. Enum
enum NivelAcesso {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}

const nivel: NivelAcesso = NivelAcesso.ADMIN;

console.log(nivel);


// 6. Objeto tipado
type Pessoa = {
  nome: string;
  idade: number;
  email: string;
};

const pessoa: Pessoa = {
  nome: "Daniel",
  idade: 25,
  email: "daniel@email.com"
};

console.log(pessoa);


// 7. Never
function erro(): never {
  throw new Error("Algo deu errado!");
}

// Não execute junto com os exemplos acima,
// pois a exceção interromperá a execução.
// erro();

Depois:

npx tsc

O TypeScript vai pegar:

src/index.ts

e gerar JavaScript em:

dist/index.js

Depois:

node dist/index.js

🧠 O que você precisa guardar desta aula
Se você está começando TypeScript, eu focaria principalmente nestes conceitos:

1. Tipagem de variável
let nome: string = "Daniel";
let idade: number = 25;
let ativo: boolean = true;

A estrutura é:

let nomeDaVariavel: Tipo = valor;

2. Tipagem de função
function somar(a: number, b: number): number {
  return a + b;
}

Leia assim:

"A função recebe dois números e retorna um número."

3. Arrays
const numeros: number[] = [1, 2, 3];
const nomes: string[] = ["Ana", "João"];

4. Tuplas
const usuario: [string, number] = ["Daniel", 25];

Posição 0 = string, posição 1 = number.

5. Objetos
type Pessoa = {
  nome: string;
  idade: number;
};

E depois:

const pessoa: Pessoa = {
  nome: "Daniel",
  idade: 25
};

6. void e never
function mensagem(): void {
  console.log("Olá");
}

→ termina normalmente e não retorna valor.

function erro(): never {
  throw new Error("Erro");
}

→ nunca termina normalmente.

🔥 Um detalhe muito importante
Não pense em TypeScript como uma linguagem completamente diferente do JavaScript.

Pense assim:

                 TypeScript
                     │
          adiciona tipos e recursos
                     │
                     ↓
                 JavaScript
                     │
                     ↓
          navegador / Node.js

Por exemplo, o navegador não executa TypeScript diretamente.

Você escreve:

const idade: number = 25;

O TypeScript verifica seu código e depois transforma isso em JavaScript, que pode ser executado pelo ambiente JavaScript.

Esse é o motivo de existir o processo:

index.ts
   ↓
npx tsc
   ↓
index.js
   ↓
node index.js

Se você dominar variáveis + tipos + funções + arrays + objetos + type, já terá uma base muito boa para avançar para interfaces, union types, generics, classes e depois TypeScript com Node/React.