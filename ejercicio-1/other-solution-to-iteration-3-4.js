const fs = require('fs');

async function taxNotifications(dni){
    // leer fichero en una string sin formato
    const fileContent = await fs.promises.readFile('./hacienda.json', 'utf-8')

    // transformar string en tipo de dato más manejable con JS
    const arrayOfPeople = JSON.parse(fileContent)
    const person = getPersonFromArray(arrayOfPeople, dni)
    console.log("🚀 ~ file: app.js:13 ~ taxNotifications ~ person:", person)

    // verificación de notificaciones pendientes y escritura en archivo. Condición: si se encuentra una persona y dicha persona tiene notificaciones pendientes.
    if (person && person.notificacionesPendientes){
        const message = `El/La contribuyente ${person.nombre} se enviará un email a ${person.email}\n`;
        await fs.promises.appendFile('notificaciones.txt', message)
    }
}

function getPersonFromArray(arr, dni){
    // Se inicializa en undefined para poder almacenar la persona encontrada
    let personFound = undefined;
    // Es el índice para iterar sobre el arreglo
    let i = 0

    // Condición: mientras que no se encuentre persona y el índice del array sea inferior a la longitud del array.
    while (!personFound && i < arr.length){
        // En cada iteración verifica si el dni de la persona del array en la posición i, es igual al dni buscado.
        if(arr[i].dni == dni){
            // Si se encuentra una coincidencia, la persona encontrada se establece como el objeto actual arr[i]
            personFound = arr[i]
        } else {
            //Si no hay coincidencia, incrementa el índice para seguir al siguiente objeto del array
            i++
        }
    }
    // Se devuelve la persona encontrada porque getPersonFromArray() tiene como propósito buscar una persona específica en el array y devolver el objeto que representa a esa persona si se encuentra.
    return personFound
}

taxNotifications("98765432C");