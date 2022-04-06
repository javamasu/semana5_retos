/* Un productor de leche lleva el registro de lo 
que produce en litros, pero cuando entrega le 
pagan en galones. Realice un algoritmo, y 
represéntelo en JS, que ayude al productor
a saber cuánto recibirá por la entrega de su 
producción de un día (1 galón
= 3.785 litros).
*/

let PG =+prompt("Ingrese el precio del galón");
let L = Number(prompt("Ingrese Cantidad de litros que produce"));
let TG = 0;
let GA = 0;

TG = L / 3.785;
GA = TG * PG ;

console.log(`La ganancia por la entrega de leche diaria es: ${GA}`);
