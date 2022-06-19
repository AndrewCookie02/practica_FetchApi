//Ejemplo de uso del FETCH API
//peticon
fetch('http://127.0.0.1:5500/data/flores.json',
        {'method': 'GET' }
      )  
      //respuesta de la peticion, los datos obtenidos se convierten a java para manipularlos

//otra forma de consultar
/*let pUrl="http://127.0.0.1:5500/data/flores.json" ;<
fetch(pUrl) */

 .then(response => response.json()) 
 // lo que vamos a hacer con los datros convertidos
 //ejecutanmos la sig funcion sin esperar a que de un resultado positivo (22) a diferencia del XML Y HTTPrequest
 .then(data => {
     //Acá completamos la funcionalidad que necesitamos con la data
    //console.log(data);

    //Dibujar en el HTML una tabla
    let tablaHTML = "<table class='table table-responsive table-striped table-hover'>" +
                    "<thead> <tr><th> Nombre</th> <th>Temp</th> <th>Descripción</th> </tr> </thead> ";

    //Consultando el valor "flores" del objeto que tiene cargada la data .json
    let lista = data.flores;  
    //Si la variable lista contiene elementos
    if ( lista.length > 0){
        tablaHTML = tablaHTML + " <tbody>";

        //Recorremos los elementos de la lista
        lista.forEach( element => {
            tablaHTML = tablaHTML + 
                       " <tr><td>" + element.nombre + "</td> " +
                             "<td>" + element.temperatura + "</td>" +
                             " <td>" + element.descripcion + "</td> </tr>";                    
        });

        tablaHTML = tablaHTML + " </tbody>";

    } else {
        tablaHTML = tablaHTML + 
                   "<tbody><tr><td colspan='3'> No existen categorias de flores a mostrar</td></tr></tbody>";        
    }

    tablaHTML = tablaHTML + "</table>";

    //Agrega como contenido HTML al container listaFlores el string que armé
    document.getElementById('tablaflores').innerHTML = tablaHTML;

    //Agregando contenido dinamico al titulo
    document.getElementById("titulo").innerHTML = data.titulopag;

    console.log(tablaHTML);

 }    
 )
.catch(error => console.log(error) ) ; //avisar si hay error


