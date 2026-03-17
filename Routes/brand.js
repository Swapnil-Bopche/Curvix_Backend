const express = require('express');
const { addBrand, getBrands } = require('../Handlers/brand-handler');
const router = express.Router();

router.post('/create', async (req, res) => {
    console.log('here');
    let model = req.body;
    let result = await addBrand(model)

    res.send(result)

})

router.get('/getBrands', async (req, res) => {
    try {
        const result = await getBrands()
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router
