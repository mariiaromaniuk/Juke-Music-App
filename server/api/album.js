const express = require('express');
const router = express.Router();
const Album = require('../db/album')
const Song = require('../db/song')


router.get('/', async(req, res, next) => {
    try {
        const responce = await album.findAll();
        res.send(responce);
    } catch (err) {
        next(err);
    }
});

router.get('/:albumId', async(req, res, next) => {
    try {
        console.log(req.params.albumId);
        const responce = await Album.findOne({
            where: {
                id: req.params.albumId
            }, 
            include: [{model: Song}]
        });
        res.send(responce);
    } catch (err) {
        next(err);
    }
});


module.exports = router