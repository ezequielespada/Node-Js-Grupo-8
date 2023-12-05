import pool from '../config/database.js';

// export async getAllUsuariosFromDB() { } 
// Publico - admin
export const getAllProductsFromDB = async () => {
    try {
        const [datos,campos] = await pool.query("SELECT * FROM datos_1")
        console.log(datos)
        console.log(campos)
        return datos
        /*
            [
                {
                    id: 1,
                    nombre: 'Juan Pérez',
                    email: 'juan.perez@example.com',
                    telefono: '+54 9 11 1234 5678',
                    edad: 28,
                    ciudad: 'Buenos Aires',
                    imagen: '/avatar/1.png'
                }
                ...
            ]

        */
    } catch (error) {
        console.error('Error querying MySQL:', error);
        throw error;
    }
}

// Obtener un usuario por ID
// Publico - admin
export const getProductByIDFromDB = async (id) => {
    try {
        const [dato] = await pool.query('SELECT * FROM datos_1 WHERE id = ?', [id]);
        return dato[0]; // lo enviamos como objeto en vez de un array
    } catch (error) {
        console.error('Error querying MySQL:', error);
        throw error;
    }
}

// Agregar usuario - POST 
// admin
export const addProductFromDB = async (productData) => {
    try {
        await pool.query('INSERT INTO datos_1 SET ?', [productData]);
    } catch (error) {
        console.error('Error inserting into MySQL:', error);
        throw error;
    }
}

// Editar usuario - POST
// admin
export const editProductPostFromDB = async (id, updatedProductData) => {
    try {
        await pool.query('UPDATE datos_1 SET ? WHERE id = ?', [updatedProductData, id]);
        const updatedProduct = await getProductByIDFromDB(id);
        return updatedProduct;
    } catch (error) {
        console.error('Error updating MySQL:', error);
        throw error;
    }
}

// Borrar usuario 
// admin
export const deleteProductFromDB = async (id) => {
    try {
        const deletedProduct = await getProductByIDFromDB(id);
        await pool.query('DELETE FROM datos_1 WHERE id = ?', [id]);
        return deletedProduct;
    } catch (error) {
        console.error('Error deleting from MySQL:', error);
        throw error;
    }
}
/*
export const ... = async () => {
    try {

    } catch(error) {

    }
}
*/