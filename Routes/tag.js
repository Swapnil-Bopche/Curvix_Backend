const express = require('express');
const { addTag, getTags, updateTag } = require('../Handlers/tag-handlers');
const router = express.Router();

router.post('', async (req, res) => {
    console.log('here');
    let model = req.body;
    let result = await addTag(model)

    res.send(result)

})

router.get('', async (req, res) => {
    try {
        const result = await getTags()
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        let model = req.body;
        let id = req.params['id']
        const updatedTag = await updateTag(id, model)
        res.status(200).json({
            message: "tag updated!",
            data: updatedTag
        })


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router
