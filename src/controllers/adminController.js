import { unlink } from 'node:fs';
import { validationResult } from 'express-validator';
import {
    getAllProductsFromDB,
    addProductFromDB,
    getProductByIDFromDB,
    editProductPostFromDB,
    deleteProductFromDB
} from "../model/model.js";

const adminControllers = {
    admin: async (req, res) => {
        try {
            const datos = await getAllProductsFromDB();
            res.render('admin', {
                title: 'LISTADO DE PRODUCTOS',
                add_item: 'AGREGAR',
                id_title: 'ID',
                codigo_title: 'Código',
                nombre_title: 'Nombre del Producto',
                categoria_title: 'Categoría',
                //usuario: req.session.usuario,
                products: datos,
                mensaje: req.query.mensaje || ""
            });
        } catch (error) {
            console.error('Error getting products:', error);
            res.status(500).send('Internal Server Error');
        }
    },
    createget: (req, res) => {
        try {
            res.render('create', {
                titulo: "CREAR NUEVO ITEM",
                huboError: false,
                errores: []
            })
        } catch (error) {
            console.error('Error adding usuario:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    createpost: async (req, res) => {
        console.log("req.file -->", req.file) // Obtener los datos del ARCHIVO subido
        console.log("req.body -->", req.body) // Obtener los datos de TEXTO del formulario

        const newProductData = req.body;
        newProductData.imagen = req.file.filename

        try {
            const errores = validationResult(req)
            console.log("ERRORES -->", errores)

            if (!errores.isEmpty()) {
                return res.render('create', {
                    titulo: "CREAR NUEVO ITEM - HUBO ERRORES",
                    huboError: true,
                    errores: errores.errors,
                })
            }
            await addProductFromDB(newProductData);
            res.redirect('/admin' + '?mensaje=Producto agregado')
        } catch (error) {
            console.error('Error adding product:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    editidget: async (req, res) => {
        const productID = req.params.id;
        try {
            const product = await getProductByIDFromDB(productID);
            if (product) {
                // res.status(200).json(usuario);
                res.render('edit', {
                    product: product
                })
            } else {
                res.status(404).send('Product not found');
            }
        } catch (error) {
            console.error('Error getting product by ID:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    editidput: async (req, res) => {
        const productID = req.params.id;
        const updatedProductData = req.body;
        updatedProductData.imagen = req.file.filename;

        // Validación
        check('product_price')
            .isNumeric().withMessage('El precio debe ser un número')
            .custom(value => isPositiveNumber(value))
            .withMessage('El precio debe ser un número positivo y no debe contener letras');

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Si hay errores, renderiza la vista con los errores
            return res.render('edit', {
                product: updatedProductData,
                errors: errors.array(),
            });
        }

        try {
            const updatedProduct = await editProductPostFromDB(productID, updatedProductData);
            if (updatedProduct) {
                res.redirect("/admin" + "?mensaje=Producto actualizado");
            } else {
                res.status(404).send('Producto not found');
            }
        } catch (error) {
            console.error('Error editing producto:', error);
            res.status(500).send('Internal Server Error');
        }
    },


    deleteid: async (req, res) => {
        const productID = req.params.id;
        try {
            const deletedProduct = await deleteProductFromDB(productID);
            if (deletedProduct) {

                unlink('public/uploads/' + deletedProduct.imagen, (err) => {
                    if (err) res.send(`Ocurrió un error ${err.code}`);
                    console.log('Producto borrado');
                });
                // res.status(200).json(deletedUsuario);
                res.redirect("/admin" + "?mensaje=Producto Borrado")
            } else {
                res.status(404).send('Product not found');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).send('Internal Server Error');
        }
    }
};

export default adminControllers;