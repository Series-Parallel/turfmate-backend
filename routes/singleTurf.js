const express = require('express')
const router = express.Router()

const {getSingleTurf} = require('../controllers/singleTurf')

router.route('/:id').get(getSingleTurf)

module.exports = router