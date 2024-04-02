const express = require('express')
const router = express.Router();
const itemController = require('../controllers/itemController')

router.get('/', itemController.getAllItems)
router.post('/items', itemController.createItem)
router.put('/:id', itemController.updateItemById)
router.delete('/:id', itemController.deleteItemById)

module.exports = router;