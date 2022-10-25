const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")


const productos = [
    {
        id: 1, 
        nombre: "Lampara",
        precio: 22000, 
        img:
        "https://home.ripley.cl/store/Attachment/WOP/D367/2000388125034/2000388125034_2.jpg"
    },
    {
        id: 2,
        nombre: "Mesa",
        precio: 22500, 
        img:
        "https://falabella.scene7.com/is/image/Falabella/6829972_1?wid=1500&hei=1500&qlt=70"
    }, 
    {
        id: 3,
        nombre: "Silla", 
        precio: 25000,  
        img:
        "https://www.cic.cl/on/demandware.static/-/Sites-masterCatalog_CIC/es_CL/dwe0fccd10/original/images/products/silla-oak-ceniza-01.jpg" 
    },
];

let carrito = []

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = ` 
    <img src="${product.img}"
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    shopContent.append (content)

    let comprar = document.createElement ("button")
    comprar.innerText = "comprar"; 
    comprar.className = "comprar";

    content.append (comprar)

    comprar.addEventListener("click", () => {
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log (carrito)
    })
});

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.clasName = "modal-header";
    modalHeader.innerHTML = ` 
    <h1 class="modal-header-tittle">Carrito.</h1>
    `
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement ("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.clasName = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
    `;

    modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0); 

    const totalBuying = document.createElement ("div")
    totalBuying.className = "total-content"; 
    totalBuying.innerHTML = `total a pagar: ${total} $`

    modalContainer.append (totalBuying)
});

