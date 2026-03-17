const express = require('express');
const { addPost, getPosts } = require('../Handlers/post-handler');

const router = express.Router();

router.post('', async (req, res) => {
    try {
        console.log('here');
    let model = req.body;
    let result = await addPost(model)

    res.send(result)

        
    }  catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('', async (req, res) => {
    try {
        const result = await getPosts()
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router
