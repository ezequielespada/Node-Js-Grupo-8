const mainControllers = {
    home: (req, res)  => res.send('Vista home'),
    contact: (req, res)  => res.send('Vista contact'),
    about: (req, res)  => res.send('Vista about'),
    faqs: (req, res)  => res.send('Vista faqs')
}

module.exports = mainControllers;