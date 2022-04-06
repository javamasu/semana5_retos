/**
La oficina de auditoría realizará una inspección 
al almacén de repuestos y consumibles, según 
auditoría en existencias deberían tener una 
cantidad N de unidades de productos entre 
Toner, Cabezales y Tinta.
Se requiere un algoritmo que permita ingresar al 
auditor la cantidad N de productos y el tipo de 
producto contabilizado para tener un informe 
final por cada tipo de producto.

*/
let total=Number(prompt("Ingrese el número total de productos"));
let producto;
let listaProductos=["TONER", "CABEZAL" , "TINTA"];
let acumuladoCantidades=0;
let cantToner=0;
let cantCabezal=0;
let cantTinta=0;

for( let i=0; acumuladoCantidades <  total; i++){                                         
    producto=prompt("Ingrese el tipo de producto").toUpperCase();        
    if(producto===listaProductos[0]){                                                         
        cantToner++;                                                
    }else if(producto===listaProductos[1]){                         
        cantCabezal++;                                              
    }else if(producto ===listaProductos[2]){                        
        cantTinta++;                                                
    }                                                               
    acumuladoCantidades= cantToner+cantCabezal+cantTinta;                     
}                                                                  

console.log(`De un total de ${total} de productos ${cantToner} son Toner, ${cantCabezal} son Cabezales y ${cantTinta} Tinta`);
alert(`De un total de ${total} de productos ${cantToner} son Toner, ${cantCabezal} son Cabezales y ${cantTinta} Tinta`)

/**
let total=Number(prompt("Ingrese el número total de productos"));
let cantToner=0;
let cantCabezal=0;
let cantTinta=0;
let AcumuladoCantidades= 0;
let producto;
while(total > AcumuladoCantidades ) {
    producto=prompt("Ingrese el tipo de producto").toUpperCase();
    if(producto === "TONER"){
        cantToner++;
    }else if(producto=== "CABEZAL"){
        cantCabezal++;
    }else if(producto === "TINTA"){
        cantTinta++;
    }
    AcumuladoCantidades= cantToner+cantCabezal+cantTinta;
}
console.log(`De un total de ${total} de productos ${cantToner} son Toner, ${cantCabezal} son Cabezales y ${cantTinta} Tinta`);
alert(`De un total de ${total} de productos ${cantToner} son Toner, ${cantCabezal} son Cabezales y ${cantTinta} Tinta`);
*/