const fs = require('fs');
let dni = "76543210D";

/** Leer README */
// Iteración 1 y 2
fs.readFile('./hacienda.json', "utf-8", (err, data) => {
    if(err) throw err
    const parsedData = JSON.parse(data)
    parsedData.forEach(person => console.log(person.nombre))
})
