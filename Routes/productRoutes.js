const express = require('express');
const authenticationController = require('./../Controller/authenticationController');
const productController = require('./../Controller/productController');



const router = express.Router();

router.get('/getAllProducts', authenticationController.protect, productController.getProducts);
router.post('/addProduct', authenticationController.protect, productController.addProducts);
router.get('/getMyProduct', authenticationController.protect, productController.getMyProducts);


  module.exports = router;
