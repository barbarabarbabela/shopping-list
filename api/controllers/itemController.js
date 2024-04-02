const Item = require('../models/itemModel')

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(400).send(err.message);
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

const updateItemById = async (req, res) => {
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

const deleteItemById = async (req, res) => {
    const itemId = req.params.id
    try{
        const itemDeleted = await Item.findByIdAndDelete(itemId);
        if(!itemDeleted) {
            res.status(404).send("Item not found")
        }
        res.status(200).send("Item deleted!")
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = { getAllItems, createItem, updateItemById, deleteItemById }