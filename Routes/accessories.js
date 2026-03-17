const express = require('express');
const { addAccessories, getAccessories } = require('../Handlers/accessories-hnadler');

const router = express.Router();

router.post('', async (req, res) => {
    console.log('here');
    let model = req.body;
    let result = await addAccessories(model)

    res.send(result)

})

router.get('', async (req, res) => {
    try {
        const result = await getAccessories()
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router
