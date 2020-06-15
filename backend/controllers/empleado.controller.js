const Empleado = require('../models/empleado');
const empleadoCtrl = {};

empleadoCtrl.getEmpleados = async(req, res) => {
    const empleados = await Empleado.find()
    res.json(empleados);
};

empleadoCtrl.createEmpleado = async(req, res) => {
    const empleado = new Empleado({
        nombre: req.body.nombre,
        posicion: req.body.posicion,
        oficina: req.body.oficina,
        sueldo: req.body.sueldo
    });
    await empleado.save();
    console.log(req.body);
    res.json({
        'status': 'Empleado Guardado'
    });
};

empleadoCtrl.getEmpleado = async(req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
}

empleadoCtrl.editEmpleado = async(req, res) => {
    const { id } = req.params;
    const empleado = {
        nombre: req.body.nombre,
        posicion: req.body.posicion,
        oficina: req.body.oficina,
        sueldo: req.body.sueldo
    };

    console.log(empleado);
    await Empleado.findByIdAndUpdate(id, { $set: empleado }, { new: true });
    res.json({ status: 'Empleado Actualizado' });

};

empleadoCtrl.deleteEmpleado = async(req, res) => {
    await Empleado.findByIdAndRemove(req.params.id);
    res.json({ status: 'Empleado Eliminado' });

}

module.exports = empleadoCtrl;