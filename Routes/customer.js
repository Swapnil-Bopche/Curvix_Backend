const express = require('express');
const { addCustomer, getCustomers, getCustomer, updateCustomer, deleteCustomer } = require('../Handlers/customer-handler');
router = express.Router()

router.post('', async (req, res) => {
    try {
        console.log('here');
        let model = req.body;
        let result = await addCustomer(model)

        res.send(result)


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/', async (req, res) => {


    try {
        console.log("Get api ✔ hit inside router....");

        const result = await getCustomers()
        res.status(200).json({
            message: "Cruvix Customers!",
            data: result
        })

    } catch (err) {
        console.error("Error in GET /", err.message);

        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let id = req.params["id"];
        let result = await getCustomer(id);
        res.send({
            message: "customer by ID!",
            data: result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete("/deleteCustomerById/:id", async (req, res) => {
    try {
        const id = req.params["id"]
        const result = await deleteCustomer(id);
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



module.exports = router