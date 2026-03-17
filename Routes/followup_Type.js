const express = require('express');
const { addfollowup_Type, getfollowup_Types } = require('../Handlers/followup_Type-handler');

const router = express.Router();

router.post('', async (req, res) => {
    console.log('here');
    let model = req.body;
    let result = await addfollowup_Type(model)

    res.send(result)

})

router.get('', async (req, res) => {
    try {
        const result = await getfollowup_Types()
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router
