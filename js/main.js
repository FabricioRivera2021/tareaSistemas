'use strict'
const url = "http://localhost/pruebas-php/PRUEBA%20BORRAR%20LUEGO/model/pedido.php"

async function getallempanadas(){
    fetch(url)
    .then(res => res.json())
    .then(data =>{console.log(data)})
}

getallempanadas();