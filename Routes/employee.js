const express = require('express');
const { addEmployee, getEmployees, updateEmployee, deleteEmployee, getEmployee } = require('../Handlers/employee-handler');
router = express.Router()

router.post('', async (req, res) => {
    try {
        console.log('here');
        let model = req.body;
        let result = await addEmployee(model)

        res.send(result)


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('', async (req, res) => {
    try {
        const result = await getEmployees()
        res.status(200).json({
            message: "Curvix Employee!",
            data: result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let id = req.params["id"];
        let result = await getEmployee(id);
        res.send({
            message: "employee by ID!",
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
        const updatedEmployee = await updateEmployee(id, model)
        res.status(200).json({
            message: "employee updated!",
            data: updatedEmployee
        })


    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params["id"]
        const result = await deleteEmployee(id);
        res.status(200).json(
            {
                message: "Employee data deleted",
                data: result
            }
        )

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})





module.exports = router