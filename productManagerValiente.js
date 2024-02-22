class ProductManager {
    
    constructor(){
        this.products = [];
        this.idCounter = 1; // Inicializo el id
    }
    addProduct(title, description, price, thumbnail, code, stock){
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error("Todos los campos son requeridos");
            return;
        }else{
            if(this.isCodeInUse(code)){
                console.error(`El codigo ${code} ya esta en uso`);
            }else{
                const product = {
                    id: this.idCounter,
                    title, 
                    description,
                    price,
                    thumbnail,
                    code,
                    stock};

                this.products.push(product); 
                this.idCounter++; //incremento el id para el proximo  
            }
            
        }
        
    }

    getProducts(){
        return this.products;
    }

    isCodeInUse(code){ //funcion para ver si code ya se uso
        return this.products.some(product => product.code === code);
    }

    getProductById(id){
        const product = this.products.find(product => product.id === id);
        if(!product){
            console.warn(`No se encontro ningun producto con el id ${id}`);
        }else{return product} ;
    }
}

/* ----------PRUEBAS---------- */

productManager = new ProductManager();

/* ARRAY VACÍO */
console.log(productManager.getProducts()); /*imprimir array vacio*/

/* AGREGO PRODUCTOS Y PRODUCTOS CON CODE REPETIDO */
productManager.addProduct("Producto 1", "Descripcion de producto 1", 200, "img1.jpg", "001", 25);
productManager.addProduct("Producto 2", "Descripcion de producto 2", 36, "img2.jpg", "002", 24);
productManager.addProduct("Producto 3", "Descripcion de producto 3", 363, "img3.jpg", "003", 2);
productManager.addProduct("Producto 4", "Descripcion de producto 4", 85, "img4.jpg", "003", 5); /*ingreso de producto con code ya existente */
console.log(productManager.getProducts());

/* IMPRIMO PRODUCTO QUE NO EXISTE */
console.log(productManager.getProductById(10)); /*imprimir producto con id que no existe*/

/* IMPRIMO PRODUCTO EXISTENTE */
console.log(productManager.getProductById(2));