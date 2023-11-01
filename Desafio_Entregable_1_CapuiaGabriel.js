let validCode = [];

class ProductManager {
  constructor() {
    this.productos = [];
  }

  addProduct(item) {
    // agrego el primer producto
    if (this.productos.length === 0) {
      item.id = 1;
      // valido campos obligatios
      if (
        item.title === "" ||
        item.description === "" ||
        item.price === 0 ||
        item.thumbnail === "" ||
        item.code === "" ||
        item.stock === undefined
      ) {
        console.log(`El Item debe tener todos los campos cargados`);
      } else {
        console.log(`datos del item ${item.title} estan completos`);
        this.productos.push(item);
        console.log(`Product ${item.title} fue agregado`);
        console.log(productos);
      }
    } else {
      // segundo producto en adelante
      // recorro productos.code en cada producto y valido si existe
      for (let index = 0; index < this.productos.length; index++) {
        validCode.push(this.productos[index].code);
      }
      if (validCode.includes(item.code)) {
        console.log(`El codigo ${item.code} esta en uso`);
      } else {
        // valido campos obligatios
        if (
          item.title === "" ||
          item.description === "" ||
          item.price === 0 ||
          item.thumbnail === "" ||
          item.code === "" ||
          item.stock === undefined
        ) {
          console.log(`El Item debe tener todos los campos cargados`);
        } else {
          // agrego producto
          console.log(`datos del item ${item.title} estan completos`);
          item.id = this.productos[this.productos.length - 1].id + 1; // cargo Id incremental
          this.productos.push(item);
          console.log(`Product ${item.title} fue agregado`);
          console.log(productos);
        }
      }
    }
  }

  getProducts() {
    console.log(" GET PRODUCTS :");
    console.log(this.productos);
  }

  getProductByid(id) {
    let byid = this.productos.filter((producto) => {
      return producto.id === id;
    });
    console.log("GET ELEMENT BY ID: " + id);
    if (byid.length === 0) {
      console.log("NOT FOUND");
    } else {
      console.log(byid);
    }
  }
}

class Producto {
  constructor(id, title, description, price, thumbnail, code, stock) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

// PRUEBAS DEL PROYECTO

// cargo 3 productos
// En cada uno, valido code no repetido, campos obligatorios y se agrega Id autoincremental

const productos = new ProductManager();

const Perro = new Producto(
  "",
  "Perro",
  "Perro de juguete",
  500,
  "fotoPerro",
  "code3",
  345
);

const Gato = new Producto(
  "",
  "Gato",
  "Gato de juguete",
  700,
  "fotoGato",
  "code4",
  340
);

const Raton = new Producto(
  "",
  "Raton",
  "Raton de Juguete",
  500,
  "fotoRaton",
  "code5",
  345
);

// Agrego items al array principal de productos
productos.addProduct(Perro);
productos.addProduct(Gato);
productos.addProduct(Raton);

// Pedir listado total de productos
productos.getProducts();

// Pedir producto por ID 2 ( Existente)
productos.getProductByid(2);

// Pedir producto por ID 7 ( No existe)
productos.getProductByid(7);
