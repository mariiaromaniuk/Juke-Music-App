const express = require('express');
const router = express.Router();
const Artist = require('../db/artist')
const Album = require('../db/album')


router.get('/', async(req, res, next) => {
    try {
        const responce = await Artist.findAll();
        res.send(responce);
    } catch (err) {
        next(err);
    }
});

router.get('/:artistId', async(req, res, next) => {
    try {
        const responce = await Artist.findOne({
            where: {
                id: req.params.artistId
            }, 
            include: [{model: Album}]
        });
        res.send(responce);
    } catch (err) {
        next(err);
    }
});


module.exports = router