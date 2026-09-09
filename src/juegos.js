function formatearJuegos(juego, posicion) {
  const disponible = juego.disponible
    ? "Disponible"
    : "No Disponible";

  return `${posicion + 1}. ${juego.titulo},  
    Editorial y Año: ${juego.editorial} - ${juego.anio}
    Jugadores Mínimos: ${juego.jugadoresMin}
    Jugadores Máximos: ${juego.jugadoresMax}
    Categorías: ${juego.categorias.join(",")}
    Disponible: ${disponible}
    `;
}

function crearInforme(juegos) {
  const juego = juegos.map(formatearJuegos);
  
  return `Catálogo de Juegos de Mesa:
    ================================
    Cantidad de juegos: ${juegos.length}
    ${juego.join("\n")}
    ================================
    
    `;
}

module.exports = {
    crearInforme
}