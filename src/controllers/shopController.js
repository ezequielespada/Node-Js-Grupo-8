const shopControllers = {
    shop: (req, res)  => res.send('Vista shop'),
    itemid:  (req, res)  => res.send(`Vista shop item id, siendo el id: ${req.params.id}`),
    itemidadd: (req, res)  => res.send('Vista añadir item al carrito'),
    cartget: (req, res)  => res.send('Vista del carrito'),
    cartpost: (req, res)  => res.send('Vista del carrito')
}

module.exports = shopControllers;