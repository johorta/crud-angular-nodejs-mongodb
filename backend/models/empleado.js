const mongoose = require('mongoose');
const { Schema } = mongoose;


const EmpleadoSchema = new Schema({
    nombre: { type: String, required: true },
    posicion: { type: String, required: true },
    oficina: { type: String, required: true },
    sueldo: { type: Number, required: true }
});



module.exports = mongoose.model('Empleado', EmpleadoSchema);