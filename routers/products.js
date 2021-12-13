const express = require('express')

const { getAllProducts, getProductDetails } = require('./../controllers/products')

const router = express.Router()

router.get('/', getAllProducts)

router.get('/:productID', getProductDetails)

module.exports = router