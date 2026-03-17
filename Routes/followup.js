const express = require('express');
const { addFollowup, getFollowups, getFollowup, updateFollowup, deleteFollowup, getFollowupByCustomerId } = require('../Handlers/followup-handler');

router = express.Router()

router.post('', async (req, res) => {
    try {
        console.log('here');
        let model = req.body;
        let result = await addFollowup(model)

        res.send(result)


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('', async (req, res) => {
    try {
        const result = await getFollowups()
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let result = await getFollowupByCustomerId(id);
        res.status(200).json({
            message: 'followup added',
            data: result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        let model = req.body;
        let id = req.params['id']
        const updatedCustomer = await updateFollowup(id, model)
        res.status(200).json({
            message: "followup updated!",
            data: updatedCustomer
        })


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params["id"]
        const result = await deleteFollowup(id);
        res.status(200).json(
            {
                message: "followup data deleted",
                data: result
            }
        )

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})



module.exports = router