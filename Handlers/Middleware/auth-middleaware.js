const jwt = require("jsonwebtoken");

function VerifyToken(req, res, next) {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).send({
            error: 'Access denied!'
        })
    }

    try {
        const decode = jwt.verify(token, 'seceret')
        console.log(decode, 'decode');

        next()
    } catch (error) {
        return res.status(401).send({
            error: 'Invalid token'
        })


    }

}

module.exports = { VerifyToken }