const fs = require('fs');

async function taxNotifications(dni) {
    // leer el fichero "en crudo" (un string sin formato)
    const fileContent = await fs.promises.readFile("./hacienda.json", "utf-8");

    // utilizamos el método JSON.parse, para transformar el string en un tipo de dato que podamos manejar mejor con JavaScript
    const parsedData = JSON.parse(fileContent);

    let defaulterFound = false; // nos indicará si hemos encontrado al infractor o no
    let i = 0; // variable de iteración. Nos va a permitir iterar por cada uno de los elementos del array

    /**
     * Mientras no hayamos encontrado al defraudador y no hayamos llegado al final del array
     * Para cada persona tenemos que comprobar dos cosas: si encontramos el dni que estamos buscando Y si dicha persona tiene notificaciones pendientes (persona.dni == dni && persona.notificacionesPendientes) 
     */
    while (!defaulterFound && i < parsedData.length) {
        // en nextPerson tengo el objeto actual sobre el cual estamos iterando
        const nextPerson = parsedData[i];
        // defaulterFound se inicializa como false antes de comenzar el bucle. Dentro del bucle, cada iteración intenta encontrar una persona que cumpla con las condiciones especificadas (mismo DNI y notificaciones pendientes). Si nextPerson.dni == dni && nextPerson.notificacionesPendientes es true para alguna persona en el arreglo parsedData, entonces defaulterFound se establece en true.
        defaulterFound = nextPerson.dni == dni && nextPerson.notificacionesPendientes;
        console.log("El/La contribuyente " + nextPerson.nombre + " tiene notificaciones pendientes")

        /**
         * Cuando salgamos del bucle while, ¿qué variable de las que hemos declarado nos va a indicar si hemos contrado al defraudador? defaulterFound
         * Si defaulterFound es true, tenemos que escribir en el fichero la información que nos pide el ejercicio
         */
        if (defaulterFound) {
            const message = `El/La contribuyente ${nextPerson.nombre} tiene notificaciones pendientes. Se enviará un email a ${nextPerson.email}\n`;
            await fs.promises.appendFile("notificaciones.txt", message);
        }
        i++;
    }
}

taxNotifications("12345678A");