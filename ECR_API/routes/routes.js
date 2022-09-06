const express = require('express');

const router = express.Router();

// Get All API
router.get('/getAll', (req, res) =>{
    res.send('Getting all the data')
})

// Get By ID API
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})
// POST API
router.post('/post', (req, res) =>{
    res.send('POST Method')
})
// PUT API
router.put('/put', (req, res) =>{
    res.send('PUT Method')
})
// DELETE API
router.delete('/delete', (req, res) =>{
    res.send('DELETE Method')
})
module.exports = router;
