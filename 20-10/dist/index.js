"use strict";
/*
    1) Crie uma classe chamada Pokemon.
    O pokemon deve ter um nome(string), ataque(number), e um poder.
    O poder é uma classe que vamos criar também.

    Métodos do Pokemon:
    falar -> um método que repete o nome do pokémon algumas vezes

    atacar -> um método que recebe outro pokemon e e ataca ele, tirando vida dele.

    atacarComPoder -> um método que recebe outro pokemon
 e ataca ele também, porém diz o nome do poder e usa o ataque do poder.

 2)Crie uma classe chamada Poder. Ela deve ter um nome(string) e ataque(number). Não precisa de nenhum método, exceto o constructor.

 3) Crie dois poderes e dois pokémons no index e simule uma pequena batalha entre eles.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
const Poder_1 = require("./Poder");
// criar dois poderes
const lancaChamas = new Poder_1.Poder("Lança Chamas", 35);
const choqueDoTrovao = new Poder_1.Poder("Choque do Trovao", 50);
//criar dois Pokemons
const pikachu = new Pokemon_1.Pokemon("Pikachu", 100, 150, choqueDoTrovao);
const charizard = new Pokemon_1.Pokemon("Charizard", 90, 200, lancaChamas);
console.log("===== INICIO DA BATALHA ======");
pikachu.falar();
charizard.falar();
console.log("==============================");
pikachu.atacar(charizard);
console.log("==============================");
charizard.atacarComPoder(pikachu);
console.log("==============================");
pikachu.atacarComPoder(charizard);
console.log("==============================");
charizard.atacar(pikachu);
console.log("======= FIM DA BATALHA =======");
