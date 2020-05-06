const express = require('express');
const router = express.Router();
const artist = require('../db/artist')


router.get('/', async(req, res, next) => {
    try {
        const responce = await artist.findAll();
        res.send(responce);
    } catch (err) {
        next(err);
    }
});

// console.log('router', router)

module.exports = router