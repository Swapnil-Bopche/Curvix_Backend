const express = require('express');
const { placeVehicleOrder, getAllVehicleOrders, deleteVehicleOrder } = require('../Handlers/vehicle_Order-handler');
const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        let model = req.body
        let result = await placeVehicleOrder(model)
        res.send(result)
    } catch (err) {
        res.status(500).json({ message: 'Error in placing order  ', error: err })
    }
})

router.get('/getVehicleOrders', async (req, res) => {
    try {
        const result = await getAllVehicleOrders()
        res.status(200).json({
            message: "Vehicle Orders ",
            data: result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


router.delete("/deleteVehicleOrderId/:id", async (req, res) => {
    try {
        const id = req.params["id"]
        const result = await deleteVehicleOrder(id);
        res.status(200).json(
            {
                message: "Vehicle Order data deleted",
                data: result
            }
        )

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})



module.exports = router;