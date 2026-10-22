import {Carro}  from "./Carro";

const carro1:Carro =  new Carro("Peugeot", "Hacth", 2010)
const carro2:Carro = new Carro("Renault", "Sedan", 2030)
const carro3:Carro = new Carro("Ford", "SUV", 1999)


console.log("----- Carro 1 ------")
console.log(`Marca: ${carro1.marca}`)
console.log(`Tipo: ${carro1.tipo}`)
console.log(`Ano: ${carro1.ano}`)
carro1.anda
carro1.buzina
console.log("")

console.log("----- Carro 2 ------")
console.log(`Marca: ${carro2.marca}`)
console.log(`Tipo: ${carro2.tipo}`)
console.log(`Ano: ${carro2.ano}`)
carro2.anda
carro2.buzina
console.log("")

console.log("----- Carro 3 ------")
console.log(`Marca: ${carro3.marca}`)
console.log(`Tipo: ${carro3.tipo}`)
console.log(`Ano: ${carro3.ano}`)
carro3.anda
carro3.buzina
console.log("")