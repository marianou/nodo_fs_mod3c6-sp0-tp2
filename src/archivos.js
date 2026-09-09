const fs = require("node:fs/promises");
const path = require("node:path");

async function LeerJson(ruta) {
  try {
    const texto = await fs.readFile(ruta, "utf8");
    return JSON.parse(texto);
  } catch (error) {
    console.error("Error al leer el archivo JSON: ", error);
    throw error;
  }
}

async function EscribirTexto(ruta, contenido){
    try{
        const carpeta = path.dirname(ruta);
        await fs.mkdir(carpeta,{recursive : true});
        await fs.writeFile(ruta,contenido,"utf8");
    } catch(error){
        console.error("Error al escribir en el archivo: ", error);
        throw error;
    }
}

module.exports = {
    LeerJson,
    EscribirTexto
};