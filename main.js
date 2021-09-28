const url =
    "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
fetch(url)
    .then((res) => res.json())
    .then((res) => {
        datos = res;
        mostrarMenu(btnBurgers);
    });




let btnBurgers = document.getElementById("burgers");
btnBurgers.addEventListener("click", () => {
    mostrarMenu(btnBurgers);
});
let btnTacos = document.getElementById("tacos");
btnTacos.addEventListener("click", () => {
    mostrarMenu(btnTacos);
});
let btnSalads = document.getElementById("salads");
btnSalads.addEventListener("click", () => {
    mostrarMenu(btnSalads);
});
let btnDesserts = document.getElementById("desserts");
btnDesserts.addEventListener("click", () => {
    mostrarMenu(btnDesserts);
});
let btnDrinks = document.getElementById("drinks");
btnDrinks.addEventListener("click", () => {
    mostrarMenu(btnDrinks);
});


let titulo = document.getElementById("tituloMenu");




function mostrarMenu(element) {
    if (element == btnBurgers) {
        datosTemp = [datos[0]];
    } else if (element == btnTacos) {
        datosTemp = [datos[1]];
    } else if (element == btnSalads) {
        datosTemp = [datos[2]];
    } else if (element == btnDesserts) {
        datosTemp = [datos[3]];
    } else if (element == btnDrinks) {
        datosTemp = [datos[4]];
    }
    let cadena = "";
    let main = document.getElementById("main");
    for (let i = 0; i < datosTemp.length; i++) {
        let cadena1 = "";
        cadena1 += `<h2> ${datosTemp[i].name} </h2>`;

        titulo.innerHTML = cadena1;

        for (let j = 0; j < datos[i].products.length; j++) {
            cadena += ` 
                  <div class="col-3" style="padding: 5px;">                                 
                  <div class="card" style="margin-bottom: 20px;">
                    <img class="card-img-top" style="height: 12rem;" src=${datosTemp[i].products[j].image} alt="Imagen Producto">                  
                    <div class="card-body">              
                      <h5 class="card-title"> ${datosTemp[i].products[j].name} </h5> 
                      <p class="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                      beatae porro praesentium architecto totam neque sint animi adipisci
                      reprehenderit quas! 
                      </p>
                      <p><strong>$${datosTemp[i].products[j].price}</strong></p>
                      <footer><a  class="btn btn-dark" id="${datosTemp[i].products[j].name}"> Add to cart </a></footer>
                    </div>
                  </div>
                  </div>`;
        }
    }

    main.innerHTML = cadena;
    for (let i = 0; i < datosTemp.length; i++) {
        for (let j = 0; j < datosTemp[i].products.length; j++) {
            let ref1 = datosTemp[i].products[j].name;
            let ref2 = datosTemp[i].products[j].price;
            let btnProducto = document.getElementById(datosTemp[i].products[j].name);
            btnProducto.addEventListener("click", () => {
                agregarItem(ref1, ref2);
            });
        }
    }

    datosTemp = datos;
}

let compras = document.getElementById("img-carrito");

let carrito = document.getElementById("numItems");

let contador = 1;
let map = new Map();
let map2 = new Map();

function agregarItem(id, precio) {
    let nuevoContador = contador++;
    if (map.has(id)) {
        map.set(id, map.get(id) + 1);
    } else {
        map.set(id, 1);
        map2.set(id, precio);
    }
    carrito.innerHTML = "<p>" + nuevoContador + " Items</p>";
}