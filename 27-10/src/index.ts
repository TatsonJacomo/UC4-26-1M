import { Mamifero } from "./Mamifero";
import { Reptil } from "./Reptil";
import { Crocodilo } from "./Crocodilo";
import { Cachorro } from "./Cachorro";
import { Coruja } from "./Coruja";
import { Animal } from "./Animal";

// Criando objetos
const dog = new Mamifero("Rex", 5, true);
const cobra = new Reptil("Naja", 2, "escamas lisas");
const crocodilo = new Crocodilo("Lacoste", 32, "Escamas Grossas")


dog.mover();      // herdado da classe Animal
dog.amamentar();  // método da classe Mamifero

cobra.mover();         // herdado da classe Animal
cobra.botarOvo();      // método da classe Reptil

crocodilo.mover()
crocodilo.botarOvo()
crocodilo.nadar()


// ===================================================

const cachorro = new Cachorro("Valddir", 150, true)
const coruja = new Coruja("shakira", 60, false)
const crocodile = new Crocodilo("MD Chefe", 75, "Escamas Lisas")

let selva:Animal[] = [cachorro, coruja, crocodile]

for(let animal of selva) {
    animal.comer()
}



/*
Por que foi possível armazenar objetos de classes diferentes no mesmo array?

R = Por Conta da classe Pai(SuperClasse).

Por que todos os objetos conseguem utilizar o método comer()?

R = Por que está do método da classe Pai(Aminal).

Qual é a vantagem de implementar esse método apenas uma vez na classe Animal?

R = Para gerar repetições nos Objetos.

*/