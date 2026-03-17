const Employee = require("../Database/employee")

async function addEmployee(model) {
    let employee = new Employee({
        ...model
    })

    await employee.save()
    return employee.toObject()
}

async function getEmployees() {
    const employees = await Employee.find().populate("post")
    return employees.map(e => e.toObject());
}


const getEmployee = async (id) => {
    let employee = await Employee.findById(id).populate("post");
    return employee.toObject();
}

const updateEmployee = async (id, model) => {
    return await Employee.findByIdAndUpdate(id, model, { new: true }).populate("post")
}

const deleteEmployee = async (id) => {
    return await Employee.findByIdAndDelete(id)
}


module.exports = { addEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee }