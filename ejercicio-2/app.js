// Cargo el módulo interno 'fs'
const fs = require('fs');

// Cargo el módulo interno 'path' para construir rutas de forma más sencilla`
const path = require('path');


function readFileCSV(pathToFile) {
    // Leemos el fichero 
    fs.readFile(pathToFile, "utf-8", (err, data) => {
        // Obtenemos cada una de las lineas por separado
        const parsedData = data.split('\r\n');
        const pathToReportFile = path.join("files", "informe.txt");

        fs.appendFileSync(pathToReportFile, `\nSiguiente fichero analizado: ${pathToFile}\n\n`);


        // iteramos sobre cada elemento del array
        for (line of parsedData) {
            const infoEntry = line.split(',');
            const message = `${infoEntry[0]} ha venido a clase durante ${infoEntry[2]} minutos.\n`;

            fs.appendFileSync(pathToReportFile, message);
        }

    });

}

const files = fs.readdirSync("files");

for (const file of files) {
    // Construye una ruta relativa al directorio actual.
    const pathToFile = path.join("files", file);
    readFileCSV(pathToFile);
}