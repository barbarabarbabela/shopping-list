const express = require('express')
const router = express.Router();
const itemController = require('../controllers/itemController')

router.get('/', itemController.getAllItems)
router.post('/items', itemController.createItem)
router.put('/:id', itemController.updateItem)

module.exports = router;