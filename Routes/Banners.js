const router = require('express').Router();
const BannersController = require('../Controller/BannersController');

router.get('/', BannersController.getAllBanners);

module.exports = router;