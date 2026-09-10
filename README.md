## Trabajo práctico 02

## Descripción
Programa que permite leer un catálogo de juegos de mesa desde un archivo juegos.json , ubicado dentro de la carpeta datos, el mismo tiene datos de distintos juegos de mesa. Este programa transforma esos registros del archivo de juegos de mesa, generando (en tiempo de ejecucion) un archivo que es un informe con el nombre "catalogo-juegos.txt" dentro de la carpeta con el nombre "salida", la cual tambien se crea en tiempo de ejecución, quedando esta estructura de la siguiente manera: "salida/catalogo-juegos.txt".

## Instalación
Para poder ejecutar el programa en cualquier PC, descargar los archivos del repositorio, luego abrir la carpeta en Visual Studio, abrir una terminal haciendo click en la barra de Menú en los 3 puntos("...") que aparecen al final, seleccionar el submenú "Terminal", y dentro del submenú que se despliega elegir la Opcion "Nuevo terminal".
Al abrirse en la parte inferior de la ventana de Visual Studio la terminal, ahi escribir lo siguiente:
"npm install", esto creará una carpeta llamada "node_modules" la cual contendrá las dependencias incluidas en el archivo "package.json".

## Cómo ejecutar
Para poder ejecutarlo se debe abrir una terminal haciendo click en la barra de Menú en los 3 puntos("...") que aparecen al final, seleccionar el submenú "Terminal", y dentro del submenú que se despliega elegir la Opcion "Nuevo terminal".
Al abrirse en la parte inferior de la ventana de Visual Studio la terminal, ahi escribir lo siguiente: "npm run check" (chequea que las rutas del proyecto esten correctas y existan), y para ejecutar el programa escribir "npm start" y presionar la tecla Enter, esto ejecutará el programa. Ambos son scripts que realizan las funciones descriptas anteriormente.

## Estructura del proyecto
tp-02-modulos-asincronia-npm/
* datos/
*     |-- juegos.json
* src/
*    |-- archivos.js
*    |-- juegos.js
*    |-- index.js
* salida/
*    |-- catalogo-juegos.txt
* .gitignore
* package.json
* package-lock.json
* README.md

## Flujo asíncrono


## Dependencias
* picocolors: Versión 1.1.1

## Conceptos

1. Responsabilidlad de cada módulo:
   * Módulo archivos.js:
     Este módulo debe encargarse exclusivamente del acceso al sistema de archivos, importando el módulo "node:fs/promises" que permite interactuar con el sistema de archivos del sistema operativo Permite Leer archivos, escribirlos y/o crearlos, modificarlos y gestionar carpetas.
     Tambien debe importar el módulo "node:path", el cual proporciona utilidades para trabajar con rutas de archivos y directorios. Tiene compatibilidad con distintas plataformas, permitiendo el manejo de rutas.

   * Módulo juegos.js:
     Este módulo debe transformar los datos del archivo "juegos.json" (ubicados dentro de la carpeta "datos"), y devolver el informe completo de todos los juegos de mesa que contiene, en formato texto
     en la ruta "salida/catalogo-juegos.txt".
     El archivo que se genera en la ruta "salida/catalogo-juegos.txt", y tiene los siguientes datos:

    Catálogo de Juegos de Mesa:
    =========================
    Cantidad de juegos: (número de juegos de mesa listado en el archivo)

      * titulo: Nombre del juego de mesa
      * editorial: Editorial responsable de la publicación del juego de mesa
      * anio: Año de publicación
      * jugadoresMin: Cantidad mínima de participantes
      * jugadoresMax:Cantidad máxima de participantes
      * categorias: Al menos dos categorías al que corresponde el juego de mesa
      * disponible: (Si/No)

    =========================


   * Módulo index.js:
     Este módulo debe coordinar la aplicación.
     Se importan el módulo "node:path", la biblioteca "picocolors", los módulos "archivos.js" y "juegos.js" con sus respectivas funciones. También se crea una constante con la ruta donde esta el listado de los juegos de mesa en formato JSON , y otra constante con la ruta de salida donde se crea la carpeta, y el arcihvo con el informe conteniendo el listado de juegos de mesa, incluidos en el archivo JSON.

2. La diferencia principal entre exportar una función y ejecutarla, consiste en el momento y el lugar donde ocurre la ejecución. Al exportar se guarda el código de la función para usarlo postreriormente, mientras que al ejecutarlo, funciona el mismo en ese momento.

3. La promesa devuelta por fs.readFile, representa el resultado futuro de la operación asíncrona de lectura de un archivo.
Cuando usas la API basada en promesas (fs.promises.readFile), la función inicia la lectura del archivo y regresa un objeto Promise que puede encontrarse en uno de estos tres estados: 

* Pendiente (Pending): El archivo se está leyendo en segundo plano, y el resultado todavía no está disponible.

* Resuelta (Fulfilled / Resolved): La operación termina con éxito. La promesa se cumple devolviendo los datos leídos del archivo. Por defecto, el valor devuelto es un objeto Buffer con los bytes binarios.Si se especifica una codificación (como 'utf8'), la promesa se resuelve directamente con una cadena de texto con el contenido del archivo. 

* Rechazada (Rejected): La operación falla. La promesa se rechaza, devolviendo un objeto de error (por ejemplo, si el archivo no existe o no se tiene permisos de lectura).

4. La palabra clave await se usa dentro de una función async, para pausar la ejecución del código hasta que una promesa (Promise), termine de resolverse o rechazarse. 
Await detiene la línea de tiempo de esa función específica sin bloquear el hilo principal del sistema, permitiendo que NodeJS siga atendiendo otras tareas.

5. Al bloque catch del main, llegan únicamente las excepciones síncronas y los rechazos de promesas (promesas rechazadas), que se propaguen correctamente hacia arriba mediante await o .catch().
* Errores síncronos lanzados con throw: Como ReferenceError, TypeError o excepciones personalizadas dentro de funciones síncronas llamadas en la pila de ejecución de main.
* Promesas rechazadas con await: Si usas async/await, cualquier promesa rechazada que esté precedida por la palabra await burbujeará como una excepción normal al bloque catch.
* Errores devueltos por librerías que usan Promesas: Si una función asíncrona falla, y no se maneja su rechazo localmente, puede ser interceptado si se ejecuta con await dentro del try de tu main.

6. Se publican "package.json" y "package-lock.json" porque son archivos livianos, mientras que "node_modules" no se publica porque contiene miles de archivos pesados, que se pueden reconstruir automáticamente.

7. Picocolors es una biblioteca rápida que permite dar formato y color con códigos ANSI de los textos impresos en la terminal.
Figura en dependencies, porque se necesita que picocolors esté instalado obligatoriamente al usar el paquete, por lo que se declara como una dependencia de producción.