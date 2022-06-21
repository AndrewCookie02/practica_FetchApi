let pUrl = "http://127.0.0.1:5500/data/planes.json" ;

fetch(pUrl) 
 .then(response => response.json())  // lo que vamos a hacer con los datros convertidos
 //ejecutanmos la sig funcion sin esperar a que de un resultado positivo (22) a diferencia del XML Y HTTPrequest
 .then(data => {
     //Acá completamos la funcionalidad que necesitamos con la data
    //console.log(data);

let tabla = document.querySelector("#tablaPlanes");
let tbody = "<tbody>" ;
let lista = data.afiliacion;
//console.log(data.afiliacion);

if (lista.length > 0){
    
    //si la variabel json tiene datos:
    lista.forEach(element => {
        tbody = tbody +  "<tr><td>" + element.Codigo + "</td>" + 
                                            "<td>" + element.NombredelPlan + "</td>" + 
                                            "<td>" + element.Plazo + "</td>" +
                                            "<td>" + element.Anualidad + "</td>" +
                                            "<td>" +
                                            "<button type='button' class='btn btn-primary texto-txtp' data-bs-toggle='modal' data-bs-target='#exampleModal' id='" + element.id + "'" + "onclick = 'VerInfo("+ element.id +")'" + ">Más Informacion</button>" + "</td>" +
                                            "</tr>";
    });
}
tbody = tbody + "</tbody>";
document.getElementById('tablaBody').innerHTML = tbody;
    })
.catch( error => console.log(error));

function VerInfo(objeto) {
    let urlObj = "https://my-json-server.typicode.com/AndrewCookie02/fake_Api_club/afiliacion/" + objeto ;        
    fetch (urlObj)
    .then (resp => resp.json())
    .then (data => {    
        console.log(urlObj);
        console.log(data);
        //let modal = document.querySelector(".modal"); 
        let plan = document.querySelector(".modal-header");
        let texto = "" ;
        texto = texto + "<h5 class='modal-title' id='modaltitulo'>" + data.NombredelPlan + "</h5>" ;
        plan.innerHTML = texto ;
        
        let codigo = document.getElementById("cod");
        let plazo = document.getElementById("plazo");
        let anual = document.getElementById("anual");
        let benef = document.getElementById("benef");
        let restricc = document.getElementById("restricc");
        let nota = document.getElementById("nota");


        codigo.textContent = "Código: " + data.Codigo;
        plazo.textContent =  "Horario: " + data.Plazo;
        anual.textContent = "Pago: " + data.Anualidad;
        benef.textContent =  data.Beneficios;
        restricc.textContent = data.Restricciones;
        nota.textContent = "Nota: " + data.Nota;
    })
}



