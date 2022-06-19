let pUrl = "https://jsonplaceholder.typicode.com/users" ;

fetch(pUrl)
.then( response => response.json())
.then ( json => {

let tbUser = document.querySelector("#usuarios");

let txtUsuario = "<tbody>" ;
//console.log(json);

if (json.length < 1){
    txtUsuario = txtUsuario + "<tr><td colspan='4'>no hay registros que mostrar</td></tr>"
} else {
    //si la variabel json tiene datos:
    json.forEach(element => {
        txtUsuario = txtUsuario + "<tr id='" + element.id + "onclick = 'verDetalle'(" + element + ")'><td>" + element.     name + "</td>"  +
                                "<td>" + element.username + "</td>" + 
                                "<td>" + element.email+ "</td>" +
                                "</tr>"
    });
}
    txtUsuario = txtUsuario + "</tbody>"
    tbUser.innerHTML = txtUsuario;

    })
.catch( error => console.log(error));

function verDetalle (objeto){
    let name = document.getElementById("nameobj");
    let user = document.getElementById("usuariobj");
    let telf = document.getElementById("telfobj");
    let website = document.getElementById("Websiteobj");

    name.textContent = objeto.name;
    user.textContent = objeto.username;
    telf.textContent = objeto.phone;
    website.textContent = objeto.website;
    website.setAttribute('href', objeto.website);
}

/*
<div class="container-fluid">
        <h3 id="nameobj"></h3>
        <h3 id="usuariobj"></h3>
        <h3 id="telfobj"></h3>
        <a href="" id="Websiteobj"></a>
    </div>
*/