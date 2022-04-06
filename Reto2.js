/*
“El náufrago satisfecho” ofrece 
hamburguesas sencillas, dobles y triples,las 
cuales tienen un costo de $20.00, $25.00 y 
$28.00 respectivamente. La empresa acepta 
tarjetas de crédito con un cargo de 5 % sobre 
la compra.
Suponiendo que los clientes adquieren sólo 
un tipo de hamburguesa, realice un algoritmo 
para determinar cuánto debe pagar una 
persona por N hamburguesas.

sencillas = 20
dobles = 25 
triples = 28
tc = 5% pv
N amburgesas
*/


let N = Number(prompt("Ingrese el numero de hamburgesas que desea consumir"));
let TI = prompt("Qué tipo de hamburguesa desea?").toUpperCase();
let PA = 0 ;
let TO = 0 ;
let TOT = 0 ;
let CA = 5/100 ;
let TP;
let salir = false ;

do{
    TP=confirm("Desea pagar con tarjeta de crédito?");
    if(TP===true){
        switch(TI){
            case "SENCILLAS": 
                PA = 20 ;
                TOT = (1+CA)*(N*PA); // = (N*PA) + CA*(N*PA)
                break;

            case "DOBLES":
                PA = 25 ;
                TOT = (1+CA)*(N*PA);
                break;
            case "TRIPLES":
                PA = 28 ;
                TOT = (1+CA)*(N*PA);
                break;

            default:
                console.log("No existe ese tipo de hamburguesa mi king color kong");
                break;
        }
    }else{
        switch(TI){
            case "SENCILLAS":
                PA = 20 ;
                TO = N * PA;
                break;

            case "DOBLES":
                PA = 25 ;
                TO = N * PA;
                break;
            case "TRIPLES":
                PA = 28 ;
                TO = N * PA;
                break;

            default:
                console.log("No existe ese tipo de hamburguesa");
                break;
        }
    } 
    salir = true ;
}while(salir === false);

if(TP === true){
    console.log(`El monto a pagar es: ${TOT}`);
    alert(`El monto a pagar es: ${TOT}`);
}else{
    console.log(`El monto a pagar es: ${TO}`);
    alert(`El monto a pagar es: ${TO}`);
}


/*
 let N = Number(prompt("Ingrese el numero de hamburgesas que desea consumir"));
 let TI = prompt("Qué tipo de hamburguesa desea?").toUpperCase();
 let PA = 0 ;
 let TO = 0 ;
 let TOT = 0 ;
 let CA = 5/100 ;
 let TP;

if(TI === "SENCILLAS"){
    PA=20;
    TOT=N*PA;
}else if(TI === "DOBLES"){
    PA=25;
    TOT=N*PA;
}else if(TI === "TRIPLES"){
    PA=28;
    TOT=N*PA;
}

TP=confirm("Desea pagar con tarjeta?");
if(TP === true){
    TOT=(1+CA)*(N*PA); // = (N*PA) + CA*(N*PA)
    console.log(`El monto a pagar es: ${TOT}`);
    alert(`El monto a pagar es: ${TOT}`);
}else{
    TO=TOT;
    console.log(`El monto a pagar es: ${TO}`);
    alert(`El monto a pagar es: ${TO}`);
}
*/