const express = require('express');
const router = express.Router();
const artistRouts = require('./artist');
const albumRouts = require('./album');
const songRouts = require('./song');


router.use('/artist', artistRouts);
router.use('/album', albumRouts);
router.use('/song', songRouts);


module.exports = router
