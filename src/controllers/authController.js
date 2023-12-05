const authControllers = {
    loginget: (req, res)  => res.send('Vista login'),
    loginpost: (req, res)  => res.send('Vista login post'),
    registerget: (req, res)  => res.send('Vista register'),
    registerpost: (req, res)  => res.send('Vista register post'),
    logout: (req, res)  => res.render('logout')
}

export default authControllers;