const express = require('express');
const router = new express.Router();
const {data}=require('./controller')
router.get('/home',data );

module.exports = router;