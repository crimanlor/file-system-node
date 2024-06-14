# Leyendo y escribiendo ficheros con NodeJS

Zoom genera un archivo de asistencia con la fecha.
La información esta separada por comas, siguiendo este formato
```
Nombre (nombre original),E-mail del usuario,Duración total (minutos),Invitado
```

## Iteración 1

Modifica el fichero app.js para leer el fichero _2abril_participants_94849208356.csv_ . Primero, muestra por consola el contenido del fichero en _crudo_

![](https://oscarm.tinytake.com/media/1645be6?filename=1718176292273_TinyTake12-06-2024-09-10-23_638537730922655217.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=413)

Luego,  transforma el string en un array y muéstralo por pantalla.

`const parsedData = data.split('\r\n');`

![](https://oscarm.tinytake.com/media/1645c10?filename=1718176726568_TinyTake12-06-2024-09-18-46_638537735276304947.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=460)

Ten en cuenta que lo que vas a obtener es un **string** muy largo.
Debemos dividir ese string por [_saltos de línea_](https://www.lenovo.com/us/en/glossary/newline/?orgRef=https%253A%252F%252Fwww.google.com%252F).

Con la ayuda del método [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) , transforma el string en un array donde cada elemento será una línea de texto.

Es buena idea que busques por Internet como hacer esta operación con NodeJS ya que econtrarás varios ejemplos. Usa el que más se adapte a tu problema a resolver.


## Iteración 2

Nos han pedido que informemos de quién ha venido a clase y quién no. Fijate que cada línea que leemos es es tratada como un _string_ 

Con la ayuda del método [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), crea un mensaje para mostrar por consola un mensaje indicando la persona que ha venido a clase

Puede haber nombres similares, no te preocupes.

![](https://oscarm.tinytake.com/media/1645c2c?filename=1718177051868_TinyTake12-06-2024-09-24-11_638537738527565445.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=365)

## Iteración 3

Añade ahora también la cantidad de minutos que ha asistido dicha estudiante.

![](https://oscarm.tinytake.com/media/1645c46?filename=1718177278892_TinyTake12-06-2024-09-27-58_638537740798790948.png&sub_type=thumbnail_preview&type=attachment&width=1198&height=430)

## Iteración 5

Crea un fichero nuevo donde guardes toda esta información, de nombre **informe.txt**, que debes guardar en el directorio **files**.

![](https://oscarm.tinytake.com/media/1645cfd?filename=1718179068309_TinyTake12-06-2024-09-57-42_638537758687123875.png&sub_type=thumbnail_preview&type=attachment&width=1199&height=543)

## DIFÍCIL: Iteración 6

Automatiza este proceso para que el script _itere_ por todo el directorio _files_ y automatices la tarea.

Muestra el fichero que ha sido analizado para cada conjunto de alumnos.


[Ejemplo del aspecto final del fichero](https://pastebin.com/raw/s6WhD5LC)
