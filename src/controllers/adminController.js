const adminControllers = {
    admin: (req, res)  => res.send('Vista admin'),
    createget: (req, res)  => res.send('Vista admin create'),
    createpost: (req, res)  => res.send('Vista admin create post'),
    editidget: (req, res)  => res.send(`Vista admin edit con id, siendo el id: ${req.params.id}`),
    editidput: (req, res)  => res.send(`Vista admin edit con id put, siendo el id: ${req.params.id}`),
    deleteid: (req, res)  => res.send(`Vista admin delete con id, siendo el id: ${req.params.id}`)

}

module.exports = adminControllers;