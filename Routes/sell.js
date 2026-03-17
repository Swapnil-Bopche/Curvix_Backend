const express = require('express');
const { addSell, getSells, updateSell, deleteSell, getSellByCustomerId } = require('../Handlers/sell-handler');
router = express.Router()

router.post('', async (req, res) => {
    try {
        console.log('here');
        let model = req.body;
        let result = await addSell(model)

        res.send(result)


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('', async (req, res) => {
    try {
        const result = await getSells()
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    } a
})

router.get('/:id', async (req, res) => {
    try {
        let id = req.params["id"];
        let result = await getSellByCustomerId(id);
        res.send(result)

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        let model = req.body;
        let id = req.params['id']
        const updatedCustomer = await updateSell(id, model)
        res.status(200).json({
            message: "sell updated!",
            data: updatedCustomer
        })


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params["id"]
        const result = await deleteSell(id);
        res.status(200).json(
            {
                message: "sell data deleted",
                data: result
            }
        )

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})



module.exports = router