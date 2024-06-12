const fs = require('fs');
const path = require('path');
let dni = "98765432C";
let mensaje = ""

/** Leer README */
// Iteración 1
// fs.readFile('./hacienda.json', "utf-8", (err, data) => {
//     console.log(data)
// })

// Iteración 2
// fs.readFile('./hacienda.json', "utf-8", (err, data) => {
//     const parsedData = JSON.parse(data)
//     const parsedNames = parsedData.map((item) => item.nombre)
//     console.log(parsedNames)
// })

// Iteración 3

function foundContributor(dni){
    fs.readFile('./hacienda.json', "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return; 
        }
    
        let defaulterFound = false
        const parsedData = JSON.parse(data)
        let i = 0

        while (!defaulterFound && i < parsedData.length){
            if (dni === parsedData[i].dni && par) {
                defaulterFound = true
                mensaje = `El/la contribuyente ${parsedData[i].nombre} tiene notificaciones pendientes. Se enviará un email a ${parsedData[i].email}\r\n`
                console.log(mensaje)
            }
            i++
        }

        if (!defaulterFound){
            console.log("No hay ningún contribuyente con ese DNI.");
        }
    })

}

foundContributor(dni)

// Iteración 4
// fs.appendFile("notificaciones.txt", mensaje, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Notificación registrada");
//     }
// });
// })
