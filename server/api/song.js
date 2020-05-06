const express = require('express');
const router = express.Router();
const song = require('../db/song')


router.get('/', async(req, res, next) => {
    try {
        const responce = await song.findAll();
        res.send(responce);
    } catch (err) {
        next(err);
    }
});

module.exports = router

