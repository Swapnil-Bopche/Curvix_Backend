const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = 1600;

app.use(cors())

const customerRoute = require('./Routes/customer')
const brandRoute = require('./Routes/brand')
const productrRoute = require('./Routes/product')
const employeeRoute = require('./Routes/employee')
const postRoute = require('./Routes/post')
const tagRoute = require('./Routes/tag')
const followupRoute = require('./Routes/followup')
const followupTypeRoute = require('./Routes/followup_Type')
const sellRoute = require('./Routes/sell')
const accessoriesRoute = require('./Routes/accessories')
const vehicelOrderRoute = require('./Routes/vehicleOrder')
const authRoute = require('./Routes/user');
const { VerifyToken } = require("./Handlers/Middleware/auth-middleaware");
// 
// 
// 
// npm run dev

app.use(express.json())

app.use((req, res, next) => {
    console.log('Incomming requesttt', req.method, req.url);
    next()
})

app.get('/', (req, res) => {
    res.send('get Api is running...')
})


app.use('/customer', VerifyToken, customerRoute)
app.use('/employee', VerifyToken, employeeRoute)
app.use('/product', VerifyToken, productrRoute)
app.use('/tag', tagRoute)
app.use('/sell', sellRoute)
app.use('/post', postRoute)
app.use('/brand', brandRoute)
app.use('/followup', VerifyToken, followupRoute)
app.use('/followupType', followupTypeRoute)
app.use('/accessories', accessoriesRoute)
app.use('/vehicleOrder', VerifyToken, vehicelOrderRoute)
app.use('/auth', authRoute)

async function connectDB() {
    await mongoose.connect("mongodb+srv://curvix_Admin:MkZsOjM9HVK80h80@vehiclecluster.jvedhzl.mongodb.net/curvix?retryWrites=true&w=majority&appName=VehicleCluster")
    console.log('connected jii..');

    

}
connectDB().catch((err) => {
    console.log(err, 'kuch to gadbad uumhhh.. ');

})

app.listen(port, () => {
    console.log('Server badiyaa hai', port);

})