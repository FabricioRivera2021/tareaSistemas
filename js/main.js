"use strict";
const url = "http://localhost/pruebas-php/Tarea_sist_op/model/pedido.php";
let card = document.querySelector('.card-container');

async function getallempanadas() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((empanada) => {//para cada "empanada" quiero obtener ciertos datos
        const div = document.createElement("div");
        div.innerHTML += `<h4>${empanada.nombre}</h4>
                          <p>${empanada.desc}</p>
                          <img src="./img/${empanada.img}.jpg" alt="sin imagen" />
                          <p>${empanada.precio}</p>
                          <button><a href="">Pedir!</a></button>`;
        card.appendChild(div)//Se agregan los productos a la pagina principal
        div.classList.add('card')//se le agrega la clase "card" de css a las mini ventanas (tarjetas) de los productos
      });
    });
}

getallempanadas();
