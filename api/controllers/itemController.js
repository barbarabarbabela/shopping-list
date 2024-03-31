const Item = require('../models/itemModel')

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(400).send(err.message);
    } finally {
        console.log("get all items");
    }
};

const createItem = async (req, res) => {
    try {
        if (!req.body || !req.body.name) {
            return res.status(400).send("Please provide the 'item' data in the request body.");
        }

        const { name } = req.body;
        
        const newItem = new Item({ name });
        const savedItem = await newItem.save();
        
        res.status(201).json({ newItem: savedItem });
    } catch (err) {
        console.error("Error while creating item:", err);
        res.status(500).send("Internal server error.");
    }
};

const updateItem = async (req, res) => {
    const itemId = req.params.id
    try{
        const itemUpdated = await Item.findByIdAndUpdate(itemId, req.body, { new: true });
        if(!itemUpdated) {
            return res.status(404).send("Item not found")
        }
        res.status(200).json(itemUpdated)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = { getAllItems, createItem, updateItem }