const filtrarProductos = require('../js/productos');
const datosProductos = require('../api/productos.json');
const datosCamperas = [{"id": "abrigo-01","titulo": "Campera 1","imagen": "./img/campera-01.jpg","categoria": "camperas","precio": 1000},
    {"id": "abrigo-02","titulo": "Campera 2","imagen": "./img/campera-02.jpg","categoria": "camperas","precio": 1000},
    {"id": "abrigo-03","titulo": "Campera 3","imagen": "./img/campera-03.jpg","categoria": "camperas","precio": 1000},
    {"id": "abrigo-04","titulo": "Campera 4", "imagen": "./img/campera-04.jpg","categoria": "camperas","precio": 1000},
    {"id": "abrigo-05","titulo": "Campera 5","imagen": "./img/campera-05.jpg","categoria": "camperas","precio": 1000}];

const datosRemeras = [{"id": "camiseta-01","titulo": "Remera 1","imagen": "./img/remera-01.jpg","categoria": "remeras","precio": 1000},
{"id": "camiseta-02","titulo": "Remera 2","imagen": "./img/remera-02.jpg","categoria": "remeras","precio": 1000},
{"id": "camiseta-03","titulo": "Remera 3","imagen": "./img/remera-03.jpg","categoria": "remeras","precio": 1000},
{"id": "camiseta-04","titulo": "Remera 4","imagen": "./img/remera-04.jpg","categoria": "remeras","precio": 1000},
{"id": "camiseta-05","titulo": "Remera 5","imagen": "./img/remera-05.jpg","categoria": "remeras","precio": 1000},
{"id": "camiseta-06","titulo": "Remera 6","imagen": "./img/remera-06.jpg","categoria": "remeras","precio": 1000},
{"id": "camiseta-07","titulo": "Remera 7","imagen": "./img/remera-07.jpg","categoria": "remeras","precio": 1000},
{"id": "camiseta-08","titulo": "Remera 8","imagen": "./img/remera-08.jpg","categoria": "remeras","precio": 1000}] 

const datosPantalones = [{"id": "pantalon-01","titulo": "Pantalón 01","imagen": "./img/pantalon-01.png","categoria": "pantalones","precio": 1000},
{"id": "pantalon-02","titulo": "Pantalón 02","imagen": "./img/pantalon-02.png","categoria": "pantalones","precio": 1000},
{"id": "pantalon-03","titulo": "Pantalón 03","imagen": "./img/pantalon-03.png","categoria": "pantalones","precio": 1000},
{"id": "pantalon-04","titulo": "Pantalón 04","imagen": "./img/pantalon-04.png","categoria": "pantalones","precio": 1000},
{"id": "pantalon-05","titulo": "Pantalón 05","imagen": "./img/pantalon-05.png","categoria": "pantalones","precio": 1000},]

const productosArray = (datosCamperas,datosPantalones,datosRemeras)

// Escribir los tests debajo

// CP001: Verificar que la función de filtrarProductos para "Todos los productos" muestre todas las categorias.
test('devuelve todos los productos', () => {
    const resultado = filtrarProductos(productosArray);
    console.log(resultado); expect(resultado).toEqual(productosArray);
})

// CP002: Verificar que la función de filtrarProductos para "Camperas" muestre solo la categoria que coincide.
test('devuelve productos con categoria definida camperas', () => {
    const productosArray = [{ categoria: 'camperas' },{ categoria: 'camperas' },{ categoria: 'camperas' },{ categoria: 'camperas' },{ categoria: 'camperas' }];
    const resultado = filtrarProductos(datosProductos, 'camperas');
    expect(datosCamperas).toEqual(resultado);
  })

// CP003: Verificar que la función de filtrarProductos para "Remeras" muestre solo la categoria que coincide.
test('devuelve productos con categoria definida remeras', () => {
    const resultado = filtrarProductos(datosRemeras, 'remeras');
    expect(datosRemeras).toEqual(resultado);
})

// CP004: Verificar que la función de filtrarProductos para "Pantalones" muestre solo la categoria que coincide.
test('devuelve productos con categoria definida pantalones', () => {
    const productosArray = [{ categoria: 'pantalones' , categoria: 'pantalones' , categoria: 'pantalones' , categoria: 'pantalones' , categoria: 'pantalones' }];
    const resultado = filtrarProductos(datosPantalones, 'pantalones');
    expect (datosPantalones).toEqual(resultado);
})

// CP005: La cateogria "sombreros" no coincide con ninguno en el array, por lo tanto, debe devolver un array vacío.
test('devuelve una array vacio por categoria no definida', () => {
    const productosArray = [{ categoria: 'camperas' },{ categoria: 'pantalones' },{ categoria: 'remeras' }];
    const resultado = filtrarProductos(productosArray, 'sombreros');
    expect(resultado).toEqual([]);
  })

//   // CP006: Caso de prueba para verificar que se devuelven todas las remeras sin importar la sensibilidad de las letras.
//   test('devuelve todas las remeras sin importar la sensibilidad de las letras', () => {

//   })


// CP007: Caso de prueba esperando que la cantidad de articulos del array coincida con lo esperado.
test('devuelve la cantidad de remeras en el array', () => {
    const productosArray = [{ categoria: 'remeras' },{ categoria: 'remeras' },{ categoria: 'remeras' },{ categoria: 'remeras' },{ categoria: 'remeras' },{ categoria: 'remeras' },{ categoria: 'remeras' },{ categoria: 'remeras' },];
    const contadorProductos = (productosArray, categoria) => {
        return productosArray.filter(producto => producto.categoria === categoria).length;};
    // llamar funcion para comprobar
        const cantidadRemeras = contadorProductos(productosArray, 'remeras');
        console.log(cantidadRemeras);
        expect(cantidadRemeras).toBe(8);
});

// CP008: Caso de prueba esperando que la cantidad de articulos del array coincida con lo esperado.
test('devuelve la cantidad de pantalones en el array', () => {
    const productosArray = [{ categoria: 'pantalones' },{ categoria: 'pantalones' },{ categoria: 'pantalones' },{ categoria: 'pantalones' },{ categoria: 'pantalones' },];
    const contadorProductos = (productosArray, categoria) => {
        return productosArray.filter(producto => producto.categoria === categoria).length;};
    // llamar funcion para comprobar
        const cantidadRemeras = contadorProductos(productosArray, 'pantalones');
        console.log(cantidadRemeras);
        expect(cantidadRemeras).toBe(5);
});

// CP009: Caso de prueba esperando que la cantidad de articulos del array coincida con lo esperado.
test('devuelve la cantidad de camperas en el array', () => {
    const productosArray = [{ categoria: 'camperas' },{ categoria: 'camperas' },{ categoria: 'camperas' },{ categoria: 'camperas' },{ categoria: 'camperas' },];
    const contadorProductos = (productosArray, categoria) => {
        return productosArray.filter(producto => producto.categoria === categoria).length;};
    // llamar funcion para comprobar
    const cantidadRemeras = contadorProductos(productosArray, 'camperas');
    console.log(cantidadRemeras);expect(cantidadRemeras).toBe(5);
});

// // CP010: Verificar que la categoría "sombreros" no está registrada como principal pero existe un artículo categorizado así , la función devuelva un array vacío cuando `categoriaNotValid` es true.
// test('devuelve array vacío si la categoría "sombreros" no está registrada como principal', () => {
//     let categoriaNotValid = false
//     const resultado = filtrarProductos(productosArray,categoriaNotValid);
//     expect(resultado).toEqual({ productos: [], total: 0 });
// });