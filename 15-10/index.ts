/*Passo a passo para iniciar um arquivo TypeScript


1º npm init -y

2° npx tsc --init ( apagar todos os comentarios, menos a linha 5 e 6), 
 depois descomentar  
 "rootDir": "./src", 
 "outDir": "./dist",
 
depois
adicionar 
,
"include": ["src"]

depois no arquivo package.json inserir ,
    "start": "npx tsc && node ./dist/index.js"

    depois criar uma pasta SRC
     e criar o arquivo index.ts 
    e rodar com o comando "npm start"
*/




/*
o arquivo tsconfig.json tem que ficar desse jeito:

{
  "compilerOptions": {
    "rootDir": "./src",
     "outDir": "./dist",
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  },
"include": ["src"]
}

*/


//como exportamos a classe, nós agora podemos importá-la
import { Cachorro } from "./Cachorro";

//para criar um objeto, criamos uma variavel que deve ser  do tipo da classe (Cachorro)
//depois, usamos a palavra "new" para criar um novo Cachorro
//dentro dos parenteses, precisamos colocar todas as informações que o constructor pede
const meuCachorro:Cachorro = new Cachorro("Tobby", 10.50, "Vira-lata")
//agora, podemos acessar a s informações do cachorro. Por exemplo, para ver o nome:
console.log(newCachorro.nome)
console.log(outroCachoro.nome)
console.log(newCachorro.raca)
console.log(outroCachorro.raca)

//


/*
Crie a classe Carro
Siga as instrucões para criá-la usando de exemplo a classe Cachorro.

O carro deve ter:
marca, tipo, ano

O que o carro faz:
-ele anda
-ele buzina

Depois de criar a classe, crie 3 carros diferentes no `index.ts`, chame seus atributos em console.log e chame seus métodos.

*/

