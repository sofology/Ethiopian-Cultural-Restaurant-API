const express = require('express');

const Model = require('../models/model');

const router = express.Router();

//Post Method
router.post('/post', async(req, res) =>{
    const data = new Model({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({ message: error.message})
    }
})

// Get All API
router.get('/getAll', async(req, res) =>{
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get By ID API
router.get('/getOne/:id', async(req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
// POST API
//router.post('/post', (req, res) =>{
   // res.send('POST Method')
//})
// PUT API
//router.put('/put', (req, res) =>{
  //  res.send('PUT Method')
//})
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// DELETE API
router.delete('/delete/:id', async(req, res) =>{
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router;
