const express = require('express');
const { registerUser, loginUser } = require('../Handlers/auth-handler');
router = express.Router()

router.post('/register', async (req, res) => {

    let model = req.body;
    if (model.name && model.email && model.password) {
        //todo register
        const user = await registerUser(model)
        res.status(200).json({
            message: "User Registered !",
            data: user

        })
    } else {
        res.status(400).json({
            error: "Please provide name, email and password"

        })

    }


})

router.post('/login', async (req, res) => {

    let model = req.body;
    if (model.email && model.password) {
        //todo login
        const loggedInUser = await loginUser(model)
        if (loggedInUser) {
            res.status(200).json({
                message: "User loggedIn Successfully !",
                data: loggedInUser

            })
        }
        else {
            res.status(400).json({
                error: "email or password incorect"

            })

        }
    } else {
        res.status(400).json({
            error: "Please provide email and password"

        })

    }


})

module.exports = router