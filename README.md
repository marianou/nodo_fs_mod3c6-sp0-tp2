## Trabajo práctico 01

## Descripción
Programa que permite guardar la ficha de un videojuego en un archivo con el nombre ficha-videojuego.txt, el cual se genera en tiempo de ejecucion dentro de la carpeta con el nombre salida, la cual tambien se crea en tiempo de ejecución, quedando esat estructura de la siguiente manera: "salida/ ficha-videojuego.txt"

## Cómo ejecutar
Para poder ejecutarlo se debe abrir una terminal haciendo click derecho sobre el archivo index.js,
y en el menu contextual seleccionar "Abrir en terminal integrado", al abrirse en la parte inferior de la ventana de Visual Studio la terminal, ahi escribir lo siguiente: node index.js o node index.js Nombre (Aca se ingresa un nombre que quiera que aparezca en la ficha del videojuego, si no se pone nada aparecera como AlumnoNN por defecto), se presiona la tecla Enter y se ejecutara el programa.

Para ejecutar el archivo orden-event-loop.js se coloca en la misma consola: node orden-event-loop.js y se presiona la tecla Enter y se ejecutara el programa. 

## Archivo generado
El archivo que se genera en la ruta "salida/ficha-videojuego.txt", y tiene los siguientes datos.

FICHA DE VIDEOJUEGO
===================
* Estudiante: (Nombre ingresado al lado de node index.js, recuperado de process.argv)
* Node.js: (ruta donde esta instalado NodeJs, recuperado de process.argv)
* Plataforma del sistema: (Ruta del directorio de trabajo, recuperado de process.argv))
* Título: (Titulo del videojuego)
* Estudio: (Estudio o empresa responsable)
* Año: (Año de publicación)
* Plataformas: (Plataformas donde se puede funciona el videojuego)
* ¿Es multijugador?: (Si/No)
