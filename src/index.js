const path = require("node:path");
const pc = require("picocolors");
const {LeerJson, EscribirTexto} = require("./archivos.js");
const {crearInforme} = require("./juegos.js");

const rutaDatos = path.join(__dirname, "..", "datos", "juegos.json");

const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");
console.log("Salida: ",rutaSalida);

async function main(){
    
    try{
        const juegos = await LeerJson(rutaDatos);
        const informe = crearInforme(juegos);
        await EscribirTexto(rutaSalida,informe);
        console.log(pc.green("Reporte generado exitosamente ", rutaSalida));

    }catch(error){
        console.error(pc.red("Error en la ejecución del programa", error));
        process.exitCode = 1;
    }
}

main();

console.log(pc.blue("Programa finalizado"));