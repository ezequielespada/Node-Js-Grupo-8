const { json } = require('express');
const productsData = require('../model/products.json');

const adminControllers = {
    admin: (req, res)  => res.render('admin', {
        products: productsData,
        title: 'LISTADO DE PRODUCTOS',
        add_item: 'AGREGAR',
        id_title: 'ID',
        codigo_title: 'Código',
        nombre_title: 'Nombre del Producto',
        categoria_title: 'Categoría'

        }
    ),
    createget: (req, res)  => res.render('create'),
    createpost: (req, res)  => res.send('Vista admin create post'),
    editidget: (req, res)  => res.render('edit', {
        product: productsData.find(product => product.product_id == req.params.id),
        
    }),
    editidput: (req, res)  => res.send(`Vista admin edit con id put, siendo el id: ${req.params.id}`),
    deleteid: (req, res)  => res.send(`Vista admin delete con id, siendo el id: ${req.params.id}`)
}

module.exports = adminControllers;