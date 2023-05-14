const ObjProductos = [
    {
        id: 1,
        nombre: "Exfoliante",
        precio: 15000,
        descripcion: "\n Esta formulado con agentes, humectante, hidratantes que nos ayuda a regenerar, suavizar."
    },
    {
        id: 2,
        nombre: "Base en barra",
        precio: 13000,
        descripcion: "\n Base en Barra elaborada con ingredientes que protege la piel, permite una sensación agradable."
    },
    {
        id: 3,
        nombre: "Base Liquida",
        precio: 20000,
        descripcion: "\n Base Líquida, Su fórmula de 24 horas cubre las imperfecciones y unifica el tono proporcionando un acabado luminoso en la piel."
    },
    {
        id: 4,
        nombre: "Labial",
        precio: 8000,
        descripcion: "\n Labial en barra humectante semi mate y metálico, de larga duración, textura cremosa, brindando hidratación que proporciona un mayor adherencia."
    },
    {
        id: 5,
        nombre: "Mascarilla",
        precio: 32000,
        descripcion: "\n La mascarilla de arcilla frutal, permite obtener un producto que limpia impurezas, suaviza, restaura y humecta la piel."
    },
    {
        id: 6,
        nombre: "Sombras",
        precio: 55000,
        descripcion: "\n Sombras compactas en gran variedad de colores, que se complementan perfectamente para crear diferentes looks y combinación de colores."
    },
    
]

let productosArray = []
let carrito = [];
let trueOfalse = true
let nombre = prompt("¿Cúal es tu nombre?")




 class Producto {
    constructor(id, nombre, precio, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
    }


function cargarProductos() {
    for (const producto of ObjProductos) {
        productosArray.push(new Producto(producto.id, producto.nombre, producto.precio, producto.descripcion))
    }
}
cargarProductos()

// Inicialización del programa 
function initProgram() {
    while (trueOfalse) {
        let selectSection = prompt("Ingresa una opción \n 1. Ver productos \n 2. Agregar Productos  \n 3. Visualizar Carrito  \n 4. Eliminar un producto \n 5. Finalizar compra  \n 6. Salir");
        switch (selectSection) {
            case "1":
                verProductos()
                break
            case "2":
                AgregarCarrito()
                break
            case "3":
                visualizarCarrito()
                break
            case "4":
                eliminarProducto()
                break
            case "5":
                finalizarCompra()
                break 
            case "6":
                trueOfalse = false
                break
           
            default:
                alert("No es una opción válida")
                 let selectSection = prompt("Ingresa una opción \n 1. Ver productos \n 2. Agregar Productos  \n 3. Eliminar un producto  \n 4. Finalizar compra  \n 5. Salir");
                break
        }
    }
}

// Función para visualizar los productos 
function verProductos(){
    productosArray.forEach((producto) => {
        alert(producto.nombre + " " + producto.precio + " " + producto.descripcion)
    })
}

// Función para buscar y agregar al carrito
function AgregarCarrito(){
    let consultarProducto = Number(prompt("Ingrese el producto que deseas \n 1. Exfoliante  \n 2. Base Barra \n 3. Base Liquida \n 4. Labial \n 5. Mascarilla \n 6. Sombras \n 7. volver al menu inicial"));
    let productoEncontrado = productosArray.find((producto) => {
        return producto.id == consultarProducto
    })
    if (productoEncontrado){
        alert(`El producto seleccionado es ${productoEncontrado.nombre} tiene un valor de $${productoEncontrado.precio} con las siguientes caracteristicas: ${productoEncontrado.descripcion}`);
        let comprobar = prompt ("¿Desea agregar el producto al carrito? \n 1. Si \n 2. No");
       
        if (comprobar == 1){
            carrito.push(productoEncontrado)
            //let Unidades =parseInt(prompt("Cuantas unidades quiere comprar"))
            alert("Su producto se encuentra en el carrito")
            
            }
             else {
            initProgram()
            }

    }else if(productoEncontrado ===7 ){
    }else{
        initProgram();
       
    }

    initProgram();
}


function visualizarCarrito(){
    for (const producto of carrito) {
        alert(producto.nombre +"\n"+ "$" + producto.precio + producto.descripcion)
    }
    if (carrito.length > 0 ){
        let comprar = Number(prompt("Desea finalizar la compra: \n 1.Si \n 2. No"));
        if (comprar == 1){
            let montoTotal = carrito.reduce((copilar, producto) => {
                return copilar + producto.precio
            }, 0)
            finalizarCompra();
        }else {
            initProgram();
        }   
    }else{
        alert ("No hay ningun producto en su carrito");3
        initProgram();
    }

}

function finalizarCompra(){
    for (const producto of carrito) {
    }
    let montoTotal = carrito.reduce((copilar, producto) => {
        return copilar + producto.precio
    }, 0)
    if (carrito.length > 0 ){
        alert (`El valor total de su compra es $${montoTotal}`);
        let comprar = Number(prompt("Desea finalizar la compra: \n 1.Si \n 2. No"));
        if (comprar == 1){
            alert("Felicidades por su compra, que lo disfrute")
        }else {
            
            initProgram();
        }   
    }else{
        alert ("No hay ningun producto en su carrito");3
        initProgram();
    }
}

function eliminarProductos() {
    carritoArray.filter((producto) => {
        let index = carrito.indexOf(producto)
        carrito.splice(index, 1)
    })
    initProgram()
}

function eliminarProducto(){
    if (carrito.length > 0){
        let nombre = prompt("Ingrese el nombre del producto que desea eliminar del carrito");
        const index = carrito.findIndex(producto => producto.nombre === nombre)
        if (index !== -1){
            carrito.splice(index, 1);
            alert("El producto fue eliminado del carrito")
        }
        visualizarCarrito();
    }else{
        alert ("Su carrito esta vacio");
        program();
    }

}

while(trueOfalse){
    if(nombre === "" ){
        alert("Por favor ingresa tu nombre para continuar")
        nombre = prompt("Ingrese su nombre");
   }else{
        alert(`Te damos la bienvenida a la tienda virtual de maquillaje colombiano \n ${nombre} \n Presiona enter para que puedas visualizar nuestros productos`)
        initProgram();
    }

    
}


initProgram() 


