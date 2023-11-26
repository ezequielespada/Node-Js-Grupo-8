const path = require('path');
const product = require('../model/products.json');
const latestReleasesData = require('../model/latestReleases.json');
const principalProductsData = require('../model/principalProducts.json');

const mainControllers = {
    home: (req, res) => {
        res.render('index', { 
            principalProducts: principalProductsData, 
            latestReleases: latestReleasesData,
            star_wars_description: "Disfruta de una saga que sigue agregando personajes a su colección",
            pokemon_description: "Atrapa a todos los que puedas y disfruta de una colección llena de amigos.",
            harry_potter_description: "Revive los recuerdos de una saga llena de magia y encanto.", 
            star_wars_title: "STAR WARS & THE MANDALORIAN",
            pokemon_title: "POKEMON INDIGO",
            harry_potter_title: "HARRY POTTER",
            hero_text: "Descubri el proximo Funko Pop de tu coleccion"
        });
    },
    contact: (req, res) => {
        res.render('contact');
    },
    about: (req, res) => {
        res.render('about');
    },
    faqs: (req, res) => {
        res.render('faqs');
    }
};

module.exports = mainControllers;